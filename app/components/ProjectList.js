import Image from "next/image";

const PROJECTS = [
	{
		title: "Overwatch Highlights",
		description: "Watch highlights and search profile stats",
		notes: "Next.js, Tailwind, Youtube Integration, API Requests",
		image: "/next-logo.png",
		link: "/projects/overwatch",
		linkText: "https://andrewtanderson.com"
	},
	{
		title: "Job Search Organizer",
		description: "Tool to assist in job search",
		notes: "Vue, Tailwind, Local Storage",
		image: "/vue-logo.png",
		link: "/projects/jobsearch",
		linkText: "https://andrewtanderson.com"
	},
	{
		title: "Card Game",
		description: "Tile-set game with card based combat",
		notes: "React, Javascript",
		image: "/react-logo-skills.png",
		link: "/projects/game",
		linkText: "https://andrewtanderson.com"
	},
	{
		title: "DevMountain Web Dev Capstone",
		description: "Full-stack event planner app",
		notes: "React, PostgreSQL, Express, Axios",
		image: "/full-stack.png",
		link: "https://share.vidyard.com/watch/gWtgwMGcd6L36fTpUE8NQS?",
		linkText: "https://share.vidyard.com"
	},
	{
		title: "DevMountain Foundations Capstone",
		description: "Full-stack workout planner app",
		notes: "HTML & CSS, PostgreSQL, Express, Axios",
		image: "/full-stack.png",
		link: "https://share.vidyard.com/watch/QdoAUHpTjcZ34SjP5bZSqT?",
		linkText: "https://share.vidyard.com"
	},
	{
		title: "Terran Emporium",
		description: "Codepen Project",
		notes: "HTML, CSS & Javascript",
		image: "/codepen-logo.png",
		link: "https://codepen.io/relic606/full/LYOyvYg",
		linkText: "https://codepen.io"
	}
];

export default function ProjectList() {
	return (
		<section className="max-w-7xl p-16 mx-auto">
			{/* <div className="ml-24 mb-4">
				<h1 className="text-3xl font-semibold">Title text</h1>
				<p className="pt-4 pl-1">additional text</p>
			</div> */}
			<div className="flex flex-wrap">
				{PROJECTS.map((project) => {
					return (
						<div
							key={project.title}
							className="m-8 py-4 h-60 w-80 flex flex-col justify-around"
						>
							<Image
								src={project.image}
								alt={project.title + " image"}
								width={50}
								height={50}
								className="border rounded-full p-2 border-gray-100 shadow-sm shadow-gray-400"
							/>
							<h2 className="font-semibold">{project.title}</h2>
							<p className="font-normal text-sm text-gray-600">
								{project.description}
							</p>
							<p className="font-normal text-xs text-gray-600">
								- {project.notes}
							</p>
							<a
								target="_blank"
								href={project.link}
								className="opacity-40 text-sm flex"
							>
								<div className="px-1 flex justify-center pt-1">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth={1.5}
										stroke="currentColor"
										className="w-4 h-4"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
										/>
									</svg>
								</div>
								<div>{project.linkText}</div>
							</a>
						</div>
					);
				})}
			</div>
		</section>
	);
}
