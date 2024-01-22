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
          window.location.pathname + window.location.search,
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
      <div className="opacity-80 hover:opacity-100 text-stone-50 text-base font-normal leading-normal tracking-tighter">
        {text}
      </div>
    </Link>
  );
};

export default FooterTextLink;
