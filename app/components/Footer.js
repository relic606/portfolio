export default function Footer() {
	return (
		<footer className="bg-sky-950 text-white sticky top-[100vh] h-12 flex items-center">
			<nav className="flex place-content-center w-screen">
				<a
					target="_blank"
					href={"https://github.com/relic606"}
					className="hover:text-sky-500 transition delay-75 px-8"
				>
					Github
				</a>

				<a
					target="_blank"
					href={"https://www.linkedin.com/in/andrew-anderson-50325749/"}
					className="hover:text-sky-500 transition delay-75 px-8"
				>
					LinkedIn
				</a>

				<p className="px-8">Email: relic606@yahoo.com</p>
			</nav>
		</footer>
	);
}
