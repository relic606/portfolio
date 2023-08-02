import Image from "next/image";

import javascriptImg from "../../javascript-logo.png";
import htmlImg from "../../html-logo.png";
import cssImg from "../../css-logo.png";
import reactImg from "../../react-logo-skills.png";
import nextImg from "../../next-logo.png";
import tailwindImg from "../../tailwind-logo.png";
import skillsImg from "../../skills.png";
import downloadImg from "../../download.png";
import postgresqlImg from "../../postgresql-logo.png";

export default function Skills() {
  const skills = [
    {
      language: "Javascript",
      description:
        "Utilized for many school/personal projects, as well as for full-stack applications",
      dates: "2012 - Present",
      image: javascriptImg,
    },
    {
      language: "HTML",
      description:
        "Hundreds of hours creating misc. webpage formats and several completed projects",
      dates: "2021 - Present",
      image: htmlImg,
    },
    {
      language: "CSS",
      description:
        "Hundreds of hours creating misc. webpage formats and several completed projects",
      dates: "2021 - Present",
      image: cssImg,
    },
    {
      language: "React.js",
      description:
        "Created a complex card-game, in addition to utilizing components for various webpages",
      dates: "2022 - Present",
      image: reactImg,
    },
    {
      language: "Next.js",
      description: "Description",
      dates: "2022 - Present",
      image: nextImg,
    },
    {
      language: "Tailwind CSS",
      description: "Description",
      dates: "2022 - Present",
      image: tailwindImg,
    },
    {
      language: "PostgreSQL",
      description:
        "Designed & implemented a database for multiple full-stack web applications",
      dates: "2022 - Present",
      image: postgresqlImg,
    },
  ];
  return (
    <section className="flex flex-col w-2/5 place-content-center p-2 border h-fit my-auto rounded-2xl">
      <div className="flex items-center">
        <Image
          src={skillsImg}
          alt="skills_img"
          width={50}
          height={50}
          className="p-2 border rounded-full"
        />
        <div className="pl-4">Skills</div>
      </div>
      <div className="flex flex-col">
        {skills.map((skill) => {
          return (
            <div key={skill.language} className="flex items-center px-4 py-2">
              <Image
                src={skill.image}
                alt="skill_image"
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
          src={downloadImg}
          alt="download_image"
          width={25}
          height={25}
          className="opacity-60 mt-1"
        ></Image>
      </div>
    </section>
  );
}
