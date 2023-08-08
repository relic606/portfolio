import Image from "next/image";

const SKILLS = [
  {
    language: "React.js",
    description: "Proficient in component-driven UI",
    year: "2022",
    image: "/react-logo-skills.png",
  },
  {
    language: "Next.js",
    description: "Versatile with modern React toolkits",
    year: "2022",
    image: "/next-logo.png",
  },
  {
    language: "Tailwind CSS",
    description: "Mastering utility-first design",
    year: "2022",
    image: "/tailwind-logo.png",
  },
  {
    language: "PostgreSQL",
    description: "Skilled in relational databases",
    year: "2022",
    image: "/postgresql-logo.png",
  },
  {
    language: "Javascript",
    description: "Expert in dynamic scripting",
    year: "2012",
    image: "/javascript-logo.png",
  },
  {
    language: "HTML & CSS",
    description: "Crafting responsive web designs",
    year: "2021",
    image: "/html-css-logo.png",
  },
];

export default function Skills() {
  return (
    <section className="flex flex-col w-2/5 place-content-center px-8 border h-fit my-auto rounded-2xl">
      <div className="flex items-center my-4 pt-4">
        <Image src="/skills.png" alt="skills image" width={30} height={30} />
        <div className="pl-4 font-semibold">Skills</div>
      </div>
      <div className="flex flex-col">
        {SKILLS.map((skill) => {
          return (
            <div key={skill.language} className="flex items-center py-4">
              <Image
                src={skill.image}
                alt={skill.language + " logo"}
                width={50}
                height={50}
                className="p-2 border border-gray-100 rounded-full shadow-sm shadow-gray-400"
              ></Image>
              <div className="flex flex-col w-full pl-4 ">
                <p className="font-semibold">{skill.language}</p>
                <div className="flex justify-between text-gray-500 font-normal">
                  <div className="flex flex-wrap w-2/3 text-gray-500">
                    {" "}
                    {skill.description}
                  </div>
                  <div className="w-fit ml-4 text-gray-400">
                    {skill.year} &mdash; Present{" "}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="w-full flex justify-center pt-4 pb-8 font-semibold">
        <a href="/resume.pdf" download className="flex">
          Download Resume{" "}
          <Image
            src="/download.png"
            alt="download image"
            width={25}
            height={25}
            className="opacity-60 mt-1"
          ></Image>
        </a>
      </div>
    </section>
  );
}
