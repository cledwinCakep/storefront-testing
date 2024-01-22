import Link from "next/link";
import { useRouter } from "next/navigation";

const FooterTextLink = ({
  text,
  href,
  hash,
}: {
  text: string;
  href: string;
  hash?: boolean;
}) => {
  const router = useRouter();
  const handleClick = (url: string) => {
    if (hash) {
      if (window.location.hash) {
        history.pushState(
          "",
          document.title,
          window.location.pathname + window.location.search
        );
      }
      router.push(url);
    }
  };
  return (
    <Link
      href={href}
      onClick={() => {
        handleClick(href);
      }}
    >
      <div className="text-base font-normal leading-6 tracking-tighter text-gray-100 opacity-80  hover:opacity-100 sm:text-lg">
        {text}
      </div>
    </Link>
  );
};

export default FooterTextLink;
