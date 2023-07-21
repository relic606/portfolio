import Link from "next/link";

export default function Projects() {
	return (
		<main className="flex place-content-center">
			<ul className="flex flex-col my-8">
				<li className="my-4 hover:text-sky-500 transition delay-75">
					<a target="_blank" href="https://codepen.io/relic606/full/LYOyvYg">
						Codepen HTML, CSS, and Javascript project
					</a>
				</li>
				<li className="my-4 hover:text-sky-500 transition delay-75">
					<a
						target="_blank"
						href="https://share.vidyard.com/watch/QdoAUHpTjcZ34SjP5bZSqT?"
					>
						DevMountain Foundations Capstone Project
					</a>
				</li>
				<li className="my-4 hover:text-sky-500 transition delay-75">
					<a
						target="_blank"
						href="https://share.vidyard.com/watch/gWtgwMGcd6L36fTpUE8NQS?"
					>
						DevMountain Web Development Capstone Project
					</a>
				</li>
				<li className="my-4 hover:text-sky-500 transition delay-75">
					<Link href={"/projects/game"}>Tile-Game</Link>
				</li>
			</ul>
		</main>
	);
}
