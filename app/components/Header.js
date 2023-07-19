import Link from "next/link";

export default function Header() {
	return (
		<header className="flex place-content-around">
			<h2>Andrew Anderson</h2>
			<nav>
				<ul>
					<li>
						<Link href={"/"}>Home</Link>
					</li>
					<li>
						<Link href={"/projects"}>Projects</Link>
					</li>
					<li>
						<Link href={"/skills"}>Skills</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}
