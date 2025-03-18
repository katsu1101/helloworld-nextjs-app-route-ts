"use client";

import Link from "next/link";

const pages = [
  {key: 1, link: "/welcome", title: "Welcome to the Welcome!", color: "bg-blue-600"},
  {key: 2, link: "/about", title: "About Page", color: "bg-green-600"},
  {key: 3, link: "/members", title: "Members Page", color: "bg-orange-600"},
];

export default function Home() {
  return (
    <div className="mt-20 flex flex-col items-center justify-center bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-8">Welcome to My Site</h1>
      <ul className="space-y-4">
        {pages.map((page) => (
          <li key={page.key}>
            <Link
              href={page.link}
              className={`px-6 py-3 rounded-lg ${page.color} text-lg font-semibold transition-all duration-300 hover:bg-blue-500 shadow-md`}
            >
              {page.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
