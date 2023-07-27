"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathName = usePathname();
  console.log(pathName);
  return (
    <header className="flex place-content-around bg-sky-950 text-white py-2">
      <Link href={"/"}>
        <h2 className="flex justify-center my-auto text-xl hover:text-sky-500 transition delay-50">
          Andrew Anderson
        </h2>
      </Link>
      <nav>
        <ul className="flex">
          <li className="px-8">
            <Link
              href={"/"}
              className={`rounded-full ${
                pathName === "/"
                  ? "text-black bg-white p-1"
                  : "hover:text-sky-500 transition delay-50"
              }`}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href={"/projects"}
              className={`rounded-full ${
                pathName === "/projects"
                  ? "text-black bg-white p-1"
                  : "hover:text-sky-500 transition delay-50"
              }`}
            >
              Projects
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
