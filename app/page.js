import Image from "next/image";

export default function App() {
	return (
		<main className="flex flex-row place-content-center m-16 rounded-lg bg-white h-3/5">
			<section className="my-4 rounded flex place-content-center flex-col w-1/3 pt-8">
				<div className="flex place-content-center">
					<Image
						alt="my_photo"
						height={250}
						width={250}
						className="place-self-center rounded-full bg-sky-100"
					></Image>
				</div>
				<div className="flex flex-col place-content-center text-center">
					<p className="w-4/5 mx-auto my-8">
						Thank you for visiting my website! My name is Andy, and Im a
						full-stack web developer located in South Jordan, Utah, with a focus
						on front-end development.
						<br></br>
						<br></br>
						After nearly 15 years in the insurance industry, I decided it was
						time for a change.
					</p>
				</div>
			</section>
			<div className="flex w-1/4 place-content-center">
				<div className="bg-black w-px h-2/6 m-auto"></div>
			</div>
			<section className="flex flex-col text-center w-1/3 place-content-center">
				<h1 className="text-xl bg-sky-900 mx-auto p-2 rounded-full text-white">
					Skills & Languages
				</h1>
				<br />
				<ul className="whitespace-nowrap">
					<li>Full-Stack Web Development - HTML, CSS, and Javascript</li>
					<li>Database Management - PostgreSQL</li>
					<li>React.js</li>
					<li>Next.js</li>
					<li>Tailwind CSS</li>
				</ul>
			</section>
		</main>
	);
}
