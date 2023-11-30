import { TButtonProps, TLists } from "@/app/types";
import { Button, Text, Title } from "@tremor/react";
import Image from "next/image";
import Link from "next/link";

export const ButtonFooter = ({ title, ...rest }: TButtonProps) => {
  return (
    <Button
      {...rest}
      size="md"
      variant="light"
      className="flex h-8 px-3 justify-center items-center gap-1 flex-1"
    >
      <span className="text-gray-400 items-stretch">{title}</span>
    </Button>
  );
};

export const Footer = () => {
  return (
    <div className="flex px-5 w-full flex-col justify-center items-center gap-7">
      <div className="flex py-7 justify-between items-center">
        <Link href={"/privacypolicy"}>
        <ButtonFooter title="Privacy policy" />
        </Link>
        <Link href={"/termsconditions"}>
        <ButtonFooter title="Terms of Use" />
        </Link>
      </div>
    </div>
  );
};
export const Login = () => {
  return (
    <div className="flex p-0 items-center gap-0  h-6">
      <Text>
        <span className="text-tremor-content-emphasis text-sm not-italic font-medium leading-4 items-stretch">
          Already have an account?
        </span>
      </Text>
      <Button
        className="flex h-10 px-4 justify-center items-center gap-2 underline underline-offset-4 "
        variant="light"
      >
        <Link href={"/login"} className="items-stretch">
          Login
        </Link>
      </Button>
    </div>
  );
};

export const Logo = () => {
  return (
    <div className="flex w-36 h-6 p-0 justify-center items-center gap-0">
      <Link href={"/"}>
        <Image
          src="/logo-superalink.svg"
          height={21}
          width={148}
          alt="logo-superalink"
          className="items-stretch"
        />
      </Link>
    </div>
  );
};

export const Header = () => {
  return (
    <div className="flex px-7 py-5 flex-col justify-end items-start gap-3 sm:flex-row sm:justify-around">
      <Logo />
      <Login />
    </div>
  );
};
export const List = ({ lists }: TLists) => {
  return (
    <div className="text-tremor-content-strong">
      <div className="list-disc pl-2">
        {lists.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </div>
    </div>
  );
};
export const Subtitle = ({ title, ...rest }: { title: string }) => {
  return (
    <Title {...rest} className="items-stretch">
      <span className="text-tremor-content-strong text-lg not-italic font-semibold leading-7 tracking-tighter">
        {title}
      </span>
    </Title>
  );
};

export const Titletext = ({ title, ...rest }: { title: string }) => {
  return (
    <Title {...rest} className="items-stretch">
      <span className="text-tremor-content-strong text-xl not-italic font-semibold leading-7 tracking-tighter">
        {title}
      </span>
    </Title>
  );
};
export const Paragraph = ({
  children,
  ...rest
}: {
  children: React.ReactNode;
}) => {
  return (
    <div
      {...rest}
      className="items-stretch text-tremor-content-strong text-base not-italic font-normal leading-6 tracking-tighter"
    >
      {children}
    </div>
  );
};
export const Content = ({
  title,
  children,
  ...rest
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="flex flex-col items-start gap-2" {...rest}>
      <Titletext title={title} />
      <Paragraph>{children}</Paragraph>
    </div>
  );
};
