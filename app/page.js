import Image from "next/image";

import Skills from "./components/Skills";
import ProfileCircle from "./components/ProfileCircle";

export default function App() {
	return (
		<main className="flex flex-row place-content-center m-16 rounded-lg bg-white p-8 max-w-screen-2xl mx-auto">
			<section className=" rounded flex place-content-center flex-col w-3/5 p-6">
				<div className="flex place-content-center">
					<ProfileCircle />
				</div>

				<br></br>
				<div className="flex flex-col place-content-center">
					<h2 className="text-3xl">Hey, I{"'"}m Andy!</h2>
					<p className="pt-2">
						I{"'"}m a full-stack web developer with a focus on front-end,
						residing in South Jordan, Utah.
					</p>
					<br></br>
					<a
						target="_blank"
						href={"https://github.com/relic606"}
						className="hover:text-sky-500 transition delay-50 px-4 flex w-fit"
					>
						<Image
							alt="github image"
							height={30}
							width={30}
							src="/github.png"
							className="rounded-full"
						></Image>
						<p className="pl-2">Github</p>
					</a>

					<a
						target="_blank"
						href={"https://www.linkedin.com/in/andrew-anderson-50325749/"}
						className="hover:text-sky-500 transition delay-50 px-4 flex w-fit"
					>
						<Image
							alt="linkedin image"
							height={30}
							width={30}
							src="/linkedin.png"
							className="rounded-full"
						></Image>
						<p className="pl-2">LinkedIn</p>
					</a>
					<div className="flex px-3">
						<Image
							alt="email image"
							height={30}
							width={47}
							src="/mail.png"
							className="rounded-full"
						></Image>
						<p className="px-2">relic606@yahoo.com</p>
					</div>

					<br></br>
					<p>
						After nearly 15 years in the insurance industry, I knew I needed a
						change. I earned my degree in Mathematics during that time, which
						has always been a passion of mine, and I was determined to use it!
						Programming had always intrigued me, but after finally dipping my
						toes into the proverbial programming pool, I was compelled to take
						the plunge!
					</p>
					<br></br>
					<p>
						Beyond programming, I am an avid gamer with a love and appreciation
						for all things computers and technology. When I{"'"}m not playing a
						few rounds of Overwatch 2 or reading up on what{"'"}s new on the
						gaming horizon, I enjoy going on hikes with loved ones, exercising
						(basketball and snowboarding being a couple of my favorite outlets),
						or settling in to binge-watch a new favorite TV series.
					</p>
				</div>
			</section>

			<Skills />
		</main>
	);
}
