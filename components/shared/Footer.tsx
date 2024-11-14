import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
        <Link href="/">
          <Image
            src="/assets/images/BSE-2-B@2x.png"
            alt="logo"
            width={128}
            height={38}
          />
        </Link>

        <p className="flex">{new Date().getFullYear()} Black Star. All Rights reserved <Link
            href="linkedin.com/in/latif-musah"
            target="_blank"
            className="text-blue-400 flex pl-2"
          >
            
            Latif Musah <span className="relative flex h-3 w-3 ml-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex h-3 w-3 rounded-full bg-sky-500"></span>
            </span>
          </Link>.</p>
      </div>
    </footer>
  );
};

export default Footer;
