import Image from "next/image";

const SKILLS = [
	{
		language: "Javascript",
		description:
			"Utilized for many school/personal projects, as well as for full-stack applications",
		dates: "2012 - Present",
		image: "/javascript-logo.png"
	},
	{
		language: "HTML",
		description:
			"Hundreds of hours creating misc. webpage formats and several completed projects",
		dates: "2021 - Present",
		image: "/html-logo.png"
	},
	{
		language: "CSS",
		description:
			"Hundreds of hours creating misc. webpage formats and several completed projects",
		dates: "2021 - Present",
		image: "/css-logo.png"
	},
	{
		language: "React.js",
		description:
			"Created a complex card-game, in addition to utilizing components for various webpages",
		dates: "2022 - Present",
		image: "/react-logo-skills.png"
	},
	{
		language: "Next.js",
		description: "Description",
		dates: "2022 - Present",
		image: "/next-logo.png"
	},
	{
		language: "Tailwind CSS",
		description: "Description",
		dates: "2022 - Present",
		image: "/tailwind-logo.png"
	},
	{
		language: "PostgreSQL",
		description:
			"Designed & implemented a database for multiple full-stack web applications",
		dates: "2022 - Present",
		image: "/postgresql-logo.png"
	}
];

export default function Skills() {
	return (
		<section className="flex flex-col w-2/5 place-content-center p-2 border h-fit my-auto rounded-2xl">
			<div className="flex items-center">
				<Image
					src="/skills.png"
					alt="skills image"
					width={50}
					height={50}
					className="p-2 border rounded-full"
				/>
				<div className="pl-4">Skills</div>
			</div>
			<div className="flex flex-col">
				{SKILLS.map((skill) => {
					return (
						<div key={skill.language} className="flex items-center px-4 py-2">
							<Image
								src={skill.image}
								alt={skill.language + " logo"}
								width={50}
								height={50}
								className="p-1 border rounded-full"
							></Image>
							<div className="flex flex-col w-full pl-4">
								{skill.language}
								<div className="flex justify-between text-gray-500 text-sm">
									<div className="flex flex-wrap w-2/3">
										{" "}
										{skill.description}
									</div>
									<div className="w-fit ml-4">{skill.dates} </div>
								</div>
							</div>
						</div>
					);
				})}
			</div>
			<div className="w-full flex justify-center py-4">
				Download Resume{" "}
				<Image
					src="/download.png"
					alt="download image"
					width={25}
					height={25}
					className="opacity-60 mt-1"
				></Image>
			</div>
		</section>
	);
}
