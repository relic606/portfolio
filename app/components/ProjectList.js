import Image from "next/image";

const PROJECTS = [
	{
		title: "Overwatch Highlights",
		description: "Watch highlights & search profile stats",
		notes: "Next.js, Tailwind, Youtube Integration, API requests",
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
		title: "FAQ OpenAI Extension",
		description: "Suggest FAQ email responses",
		notes: "OpenAI, Local Storage, Chrome Extension",
		image: "/javascript-logo.png",
		link: null,
		linkText: "Private"
	},
	{
		title: "AWS Lambda Cron Function",
		description: "Automated daily report generation",
		notes: "AWS, Lambda, Node.js",
		image: "/javascript-logo.png",
		link: null,
		linkText: "Private"
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
		title: "Web Dev Capstone",
		description: "Full-stack event planner app",
		notes: "React, PostgreSQL, Express, Axios",
		image: "/full-stack.png",
		link: "https://share.vidyard.com/watch/gWtgwMGcd6L36fTpUE8NQS?",
		linkText: "https://share.vidyard.com"
	},
	{
		title: "Foundations Capstone",
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
		<section className="flex justify-center sm:p-12">
			<div className="flex flex-wrap justify-center gap-6">
				{PROJECTS.map((project) => {
					return (
						<div
							key={project.title}
							className="h-72 w-96 bg-white rounded-xl p-7 flex flex-col hover:scale-105 transition-all"
						>
							<div className="grow">
								<div className="flex items-start">
									<Image
										src={project.image}
										alt={project.title + " image"}
										width={50}
										height={50}
										className="border rounded-full p-2 border-gray-100 shadow-sm shadow-gray-400"
									/>

									<h2 className="font-semibold text-2xl mx-4 my-auto">
										{project.title}
									</h2>
								</div>
								<div className="mt-6">
									<p className="text-gray-600 mt-4 mb-4">
										{project.description}
									</p>
									<p className="text-gray-600">
										<span className="font-semibold">Technologies</span>:{" "}
										{project.notes}
									</p>
								</div>
							</div>
							{project.link ? (
								<a
									target="_blank"
									href={project.link}
									className="opacity-40 text-sm flex items-center mt-4"
								>
									<div className="px-1 flex justify-center">
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
							) : (
								<div className="opacity-40 text-sm flex items-center mt-4">
									{project.linkText}
								</div>
							)}
						</div>
					);
				})}
				<div className="h-1 w-96"></div>
				<div className="h-1 w-96"></div>
			</div>
		</section>
	);
}
