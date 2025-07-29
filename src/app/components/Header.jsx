// src/app/components/Header.jsx
"use client"; // required when using <Link> with navigation

import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-sky-950 text-white shadow-lg">
      <h1 className="font-heading text-4xl text-center mb-2 drop-shadow-md">
        Kyoto
      </h1>
      <nav>
        <ul className="flex justify-end gap-6 text-lg font-medium">
          <li>
            <Link href="/" className="hover:bg-white/20 px-4 py-0 rounded">
              HOME
            </Link>
          </li>
          <li>
            <Link href="/blog" className="hover:bg-white/20 px-4 py-0 rounded">
              BLOG
            </Link>
          </li>
          <li>
            <a href="#contact" className="hover:bg-white/20 px-4 py-0 rounded">
              CONTACT
            </a>
          </li>
        </ul>
      </nav>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-pink-400"></div>
    </header>
  );
}
