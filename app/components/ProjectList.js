import Image from "next/image";

const PROJECTS = [
	{
		title: "DevMountain Foundations Capstone Project",
		description: "Full-stack weekly workout manager app",
		image: "/full-stack.png",
		link: "https://share.vidyard.com/watch/gWtgwMGcd6L36fTpUE8NQS?"
	}
];

export default function ProjectList() {
	return (
		<section className="flex">
			{PROJECTS.map((project) => {
				return (
					<div key={project.title}>
						<Image
							src="/full-stack.png"
							alt="full-stack image"
							width={50}
							height={50}
							className="mr-4"
						/>
						<h2>{project.title}</h2>
						<p>{project.description}</p>
						<div>{project.link}</div>
					</div>
				);
			})}
		</section>
	);
}
