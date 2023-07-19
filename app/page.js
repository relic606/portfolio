// import resetStyles from "../styles/reset.css";
import globalStyles from "../styles/global.css";
import Image from "next/image";

export default function Home() {
	return (
		<main className="flex flex-col">
			<div className="flex place-content-around">
				<h2>Andrew Anderson</h2>
				<nav>
					<ul>
						<li>Home</li>
						<li>Projects</li>
						<li>Skills</li>
					</ul>
				</nav>
			</div>

			<Image
				alt="My_Photo"
				height={300}
				width={300}
				className="place-self-center"
			></Image>
		</main>
	);
}
