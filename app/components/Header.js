import Link from "next/link";

export default function Header() {
	return (
		<header className="flex place-content-around bg-sky-950 text-white">
			<h2 className="flex justify-center my-auto">Andrew Anderson</h2>
			<nav>
				<ul>
					<li>
						<Link href={"/"} className="hover:text-sky-500 transition delay-75">
							Home
						</Link>
					</li>
					<li>
						<Link
							href={"/projects"}
							className="hover:text-sky-500 transition delay-75"
						>
							Projects
						</Link>
					</li>
					<li>
						<Link
							href={"/skills"}
							className="hover:text-sky-500 transition delay-75"
						>
							Skills
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}
