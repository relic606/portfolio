import Image from "next/image";
import githubImg from "../github.png";
import linkedinImg from "../linkedin.jpg";
import mailImg from "../mail.png";

export default function App() {
  return (
    <main className="flex flex-row place-content-center m-16 rounded-lg bg-white p-8 max-w-7xl mx-auto">
      <section className=" rounded flex place-content-center flex-col w-2/3 py-4 pl-4">
        <div className="flex place-content-center">
          <div className="profile-circle-container">
            <div className="circle"></div>
            <div
              className="circle"
              style={{ transform: "rotate(60deg)", animationDelay: "0.5s" }}
            ></div>
            <div
              className="circle"
              style={{ transform: "rotate(90deg)", animationDelay: "0.75s" }}
            ></div>
            <div
              className="circle"
              style={{ transform: "rotate(120deg)", animationDelay: "1s" }}
            ></div>
            <div
              className="circle"
              style={{ transform: "rotate(180deg)", animationDelay: "1.5s" }}
            ></div>
            <div
              className="circle"
              style={{ transform: "rotate(240deg)", animationDelay: "2s" }}
            ></div>
            <div
              className="circle"
              style={{ transform: "rotate(270deg)", animationDelay: "1.75s" }}
            ></div>
            <div
              className="circle"
              style={{ transform: "rotate(300deg)", animationDelay: "2.5s" }}
            ></div>
          </div>
          <Image
            alt="my_photo"
            height={250}
            width={250}
            className="place-self-center rounded-full bg-sky-100"
          ></Image>
        </div>

        <br></br>
        <div className="flex flex-col place-content-center">
          <h2 className="text-3xl">Hey, I{"'"}m Andy!</h2>
          <p className="pt-2">
            I{"'"}m a full-stack web developer with a focus on front-end,
            residing in South Jordan, Utah.
          </p>
          <br></br>
          <a
            target="_blank"
            href={"https://github.com/relic606"}
            className="hover:text-sky-500 transition delay-50 px-4 flex"
          >
            <Image
              height={30}
              width={30}
              src={githubImg}
              className="bg-white rounded-full"
            ></Image>
            <p className="pl-2">Github</p>
          </a>

          <a
            target="_blank"
            href={"https://www.linkedin.com/in/andrew-anderson-50325749/"}
            className="hover:text-sky-500 transition delay-50 px-4 flex"
          >
            <Image
              height={30}
              width={30}
              src={linkedinImg}
              className="rounded-full"
            ></Image>
            <p className="pl-2">LinkedIn</p>
          </a>
          <div className="flex px-3">
            <Image
              height={30}
              width={47}
              src={mailImg}
              className="bg-white rounded-full"
            ></Image>
            <p className="px-2">relic606@yahoo.com</p>
          </div>

          <br></br>
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
      <div className="flex place-content-center px-4">
        <div className="bg-black w-px h-1/3 m-auto bg-opacity-20"></div>
      </div>
      <section className="flex flex-col w-1/3 place-content-center p-8">
        <h1 className="text-xl bg-sky-900 px-4 rounded-full text-white w-fit">
          Skills & Languages
        </h1>
        <br />
        <ul>
          <li>Full-Stack Web Development - HTML, CSS, and Javascript</li>
          <li>Database Management - PostgreSQL</li>
          <li>React.js</li>
          <li>Next.js</li>
          <li>Tailwind CSS</li>
        </ul>
      </section>
    </main>
  );
}
