"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
	const pathName = usePathname();
	console.log(pathName);
	return (
		<header className="flex place-content-around bg-sky-950 text-white py-2">
			<Link href={"/"}>
				<h2 className="flex justify-center my-auto text-xl">Andrew Anderson</h2>
			</Link>
			<nav>
				<ul className="flex">
					<li className="px-8">
						<Link
							href={"/"}
							className={`${
								pathName === "/" ? "text-black bg-white p-1 rounded-full" : ""
							}`}
						>
							About
						</Link>
					</li>
					<li>
						<Link
							href={"/projects"}
							className={`${
								pathName === "/projects"
									? "text-black bg-white p-1 rounded-full"
									: ""
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
