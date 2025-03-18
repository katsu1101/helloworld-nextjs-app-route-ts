"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Breadcrumbs() {
  const pathname = usePathname();
  const paths = pathname.split("/").filter((path) => path !== ""); // 空の要素を削除

  return (
    <nav className="text-gray-400 text-sm mb-4">
      <ul className="flex space-x-2">
        <li>
          <Link href="/" className="hover:underline text-gray-300">
            Home
          </Link>
        </li>
        {paths.map((path, index) => {
          const url = `/${paths.slice(0, index + 1).join("/")}`;
          const isLast = index === paths.length - 1;

          return (
            <li key={url} className="flex items-center">
              <span className="mx-2">/</span>
              {isLast ? (
                <span className="text-gray-500">{decodeURIComponent(path)}</span>
              ) : (
                <Link href={url} className="hover:underline text-gray-300">
                  {decodeURIComponent(path)}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
