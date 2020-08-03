import React from "react";
import Link from "next/link";

export default () => {
  return (
    <header>
      <ul className="flex flex-row justify-around bg-black text-white p-3">
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </li>
      </ul>
    </header>
  );
};
