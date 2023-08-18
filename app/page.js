import Image from "next/image";

import Skills from "./components/Skills";
import ProfileCircle from "./components/ProfileCircle";

export default function App() {
	return (
		<main className="flex flex-row place-content-center m-16 rounded-lg bg-white p-8 max-w-screen-2xl mx-auto flex-wrap">
			<section className="rounded flex place-content-center flex-col p-6 about-section">
				<div className="flex">
					<ProfileCircle />
				</div>

				<div className="flex flex-col">
					<h2 className="text-6xl font-semibold py-6">Hey, I{"'"}m Andy!</h2>
					<p className="">
						I{"'"}m a full-stack web developer with a focus on front-end,
						residing in South Jordan, Utah.
					</p>
					<div className="flex">
						<a
							target="_blank"
							href={"https://github.com/relic606"}
							className="hover:text-sky-500 transition delay-50 flex pr-8 py-6"
						>
							<Image
								alt="github image"
								height={30}
								width={30}
								src="/github.png"
								className="rounded-full"
							></Image>
							<p className="pl-1 my-auto">Github</p>
						</a>

						<a
							target="_blank"
							href={"https://www.linkedin.com/in/andrew-anderson-50325749/"}
							className="hover:text-sky-500 transition delay-50 flex px-8 py-6"
						>
							<Image
								alt="linkedin image"
								height={30}
								width={30}
								src="/linkedin.png"
								className="rounded-full"
							></Image>
							<p className="pl-1 my-auto">LinkedIn</p>
						</a>
						<a
							href="mailto:relic606@yahoo.com"
							className="flex hover:text-sky-500 transition delay-50 px-8 py-6"
						>
							<Image
								alt="email image"
								height={30}
								width={47}
								src="/mail.png"
								className="rounded-full"
							></Image>
							<p className="my-auto">relic606@yahoo.com</p>
						</a>
					</div>

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
