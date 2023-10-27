import Image from "next/image";
import ProjectList from "../components/ProjectList.js";

export default function Projects() {
	return (
		<main>
			<div className="w-fit flex mx-auto sm:my-16 my-6 rounded-lg">
				<ProjectList />
			</div>
		</main>
	);
}
