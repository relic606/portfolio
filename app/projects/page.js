import Image from "next/image";
import codepenImg from "/codepen-logo.png";
import fullStackImg from "/full-stack.png";
import reactImg from "/react-logo.png";

export default function Projects() {
	return (
		<main className="flex place-content-center">
			<ul className="flex flex-col my-8">
				<a
					target="_blank"
					href="https://share.vidyard.com/watch/QdoAUHpTjcZ34SjP5bZSqT?"
				>
					<li className="my-4 hover:text-white hover:bg-sky-800 hover:rounded transition delay-75 flex p-4 bg-sky-200 rounded hover:scale-110">
						<Image src={fullStackImg} width={50} height={50} className="mr-4" />
						<div>
							<h1 className="text-xl">
								DevMountain Foundations Capstone Project
							</h1>
							<p className="text-sm">Full-stack weekly workout manager app</p>
						</div>
					</li>
				</a>
				<a
					target="_blank"
					href="https://share.vidyard.com/watch/gWtgwMGcd6L36fTpUE8NQS?"
					className="flex"
				>
					<li className="my-4 hover:text-white hover:bg-sky-800 hover:rounded transition delay-75 flex p-4 bg-sky-200 rounded hover:scale-110">
						<Image src={fullStackImg} width={50} height={50} className="mr-4" />
						<div>
							<h1 className="text-xl">
								DevMountain Web Development Capstone Project
							</h1>
							<p className="text-sm">Full-stack event planner app</p>
						</div>
					</li>
				</a>
				<a target="_blank" href={"/projects/game"}>
					<li className="my-4 hover:text-white hover:bg-sky-800 hover:rounded transition delay-75 flex p-4 bg-sky-200 rounded hover:scale-110">
						<Image src={reactImg} width={51} height={45} className="mr-4" />
						<div>
							<h1 className="text-xl">Tile-Game</h1>
							<p className="text-sm">Card game built with React.js</p>
						</div>
					</li>
				</a>
				<a target="_blank" href="https://codepen.io/relic606/full/LYOyvYg">
					<li className="my-4 hover:text-white hover:bg-sky-800 hover:rounded transition delay-75 flex p-4 bg-sky-200 rounded hover:scale-110">
						<Image src={codepenImg} width={50} height={50} className="mr-4" />
						<div>
							<h1 className="text-xl">Terran Emporium</h1>
							<p className="text-sm">
								Codepen HTML, CSS, and Javascript Project
							</p>
						</div>
					</li>
				</a>
			</ul>
		</main>
	);
}
