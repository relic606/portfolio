"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// export default function Header() {
// 	const pathName = usePathname();
// 	console.log(pathName);
// 	return (
// 		<header className="bg-sky-950 text-white py-2">
// 			<div className="flex max-w-screen-2xl justify-between mx-auto px-2">
// 				<Link href={"/"}>
// 					<h2 className="flex justify-center my-auto text-xl hover:text-sky-500 transition delay-50">
// 						Andrew Anderson
// 					</h2>
// 				</Link>
// 				<nav>
// 					<ul className="flex">
// 						<li className="px-8">
// 							<Link
// 								href={"/"}
// 								className={`${
// 									pathName === "/"
// 										? "inline-flex items-center border-b-2 border-indigo-500 px-1 pt-1 text-sm font-medium text-gray-900"
// 										: "inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
// 								}`}
// 							>
// 								About
// 							</Link>
// 						</li>
// 						<li>
// 							<Link
// 								href={"/projects"}
// 								className={`rounded-full ${
// 									pathName === "/projects"
// 										? "text-black bg-white p-1"
// 										: "hover:text-sky-500 transition delay-50"
// 								}`}
// 							>
// 								Projects
// 							</Link>
// 						</li>
// 					</ul>
// 				</nav>
// 			</div>
// 		</header>
// 	);
// }

import { Fragment } from "react";
import { Disclosure } from "@headlessui/react";

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

export default function Header() {
	const pathName = usePathname();
	return (
		<Disclosure as="nav" className="bg-white shadow">
			{({ open }) => (
				<>
					<div className="mx-auto lg:max-w-7xl px-8 w-full">
						<div className="relative flex h-12">
							<div className="flex flex-1">
								<div className="flex sm:ml-6 sm:space-x-8 space-x-2">
									<Link
										href={"/"}
										className={`${
											pathName === "/"
												? "inline-flex items-center border-b-2 border-indigo-500 px-1 pt-1 text-sm font-medium text-gray-900"
												: "inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
										}`}
									>
										About
									</Link>
									<Link
										href={"/projects"}
										className={`${
											pathName === "/projects"
												? "inline-flex items-center border-b-2 border-indigo-500 px-1 pt-1 text-sm font-medium text-gray-900"
												: "inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
										}`}
									>
										Projects
									</Link>
								</div>
							</div>
							<div className="inline-flex items-center font-medium min-w-fit">
								Andrew Anderson
							</div>
						</div>
					</div>
				</>
			)}
		</Disclosure>
	);
}
