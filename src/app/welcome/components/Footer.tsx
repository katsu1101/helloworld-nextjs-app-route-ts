import Image from "next/image";

const footerLinks = [
  {
    href: "https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app",
    src: "/file.svg",
    alt: "File icon",
    label: "Learn",
  },
  {
    href: "https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app",
    src: "/window.svg",
    alt: "Window icon",
    label: "Examples",
  },
  {
    href: "https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app",
    src: "/globe.svg",
    alt: "Globe icon",
    label: "Go to nextjs.org →",
  },
];

export default function Footer() {
  return (
    <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
      {footerLinks.map(({ href, src, alt, label }) => (
        <a
          key={href}
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href={href}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image aria-hidden src={src} alt={alt} width={16} height={16} />
          {label}
        </a>
      ))}
    </footer>
  );
}
