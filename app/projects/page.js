import Image from "next/image";
import ProjectList from "../components/ProjectList.js";

export default function Projects() {
  return (
    <main>
      <div className="w-fit bg-white flex mx-auto my-16 rounded-lg">
        <ProjectList />
      </div>
    </main>
  );
}
