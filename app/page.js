import Image from "next/image";

import Skills from "./components/Skills";
import ProfileCircle from "./components/ProfileCircle";

export default function App() {
	return (
		<main className="flex flex-row place-content-center sm:m-12 rounded-lg bg-white sm:p-8 mx-auto flex-wrap my-12 sm:gap-12">
			<section className="rounded flex place-content-center flex-col p-6 sm:about-section sm:max-w-3xl ">
				<div className="flex mx-auto sm:mx-0">
					<ProfileCircle />
				</div>

				<div className="flex flex-col">
					<h2 className="sm:text-6xl text-5xl mx-auto sm:mx-0 font-semibold py-6">
						Hey, I{"'"}m Andy!
					</h2>
					<p className="">
						I{"'"}m a full-stack web developer with a focus on front-end,
						residing in South Jordan, Utah.
					</p>
					<div className="sm:flex my-2">
						<a
							target="_blank"
							href={"https://github.com/relic606"}
							className="hover:text-sky-500 transition delay-50 flex sm:pr-8 sm:py-6 py-2"
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
							className="hover:text-sky-500 transition delay-50 flex sm:px-8 sm:py-6 py-2"
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
							className="flex hover:text-sky-500 transition delay-50 sm:px-8 sm:py-6 py-2"
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
						After nearly 15 years in the insurance industry, I wanted to try
						something new. I earned my degree in Mathematics during that time,
						which has always been a passion of mine, and I was curious to see
						what new and exiting ways I could utilize it! Programming had always
						intrigued me, and after finally dipping my toes into the proverbial
						programming pool, I was compelled to take the plunge!
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
