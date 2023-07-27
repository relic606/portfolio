import Image from "next/image";

export default function App() {
  return (
    <main className="flex flex-row place-content-center m-16 rounded-lg bg-white">
      <section className=" rounded flex place-content-center flex-col w-1/3 py-4">
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
        <div className="flex flex-col place-content-center text-center">
          <p className="w-4/5 mx-auto my-auto">
            My name is Andy, and I{"'"}m a full-stack web developer with a focus
            on front-end, residing in South Jordan, Utah.
            <br></br>
            <br></br>
            After nearly 15 years in the insurance industry, I knew I needed a
            change. I earned my degree in Mathematics during that time, which
            has always been a passion of mine, and I was determined to use it!
            Programming had always intrigued me, but after finally dipping my
            toes into the proverbial programming pool, I was compelled to take
            the plunge!
            <br></br>
            <br></br>
            Beyond programming, I am an avid gamer with a love and appreciation
            for all things computers and technology. When I{"'"}m not playing a
            few rounds of Overwatch 2 or reading up on what{"'"}s new on the
            gaming horizon, I enjoy going on hikes with loved ones, exercising
            (basketball and snowboarding being a couple of my favorite outlets),
            or settling in to binge-watch a new favorite TV series.
          </p>
        </div>
      </section>
      <div className="flex w-1/4 place-content-center">
        <div className="bg-black w-px h-2/6 m-auto"></div>
      </div>
      <section className="flex flex-col text-center w-1/3 place-content-center">
        <h1 className="text-xl bg-sky-900 mx-auto p-2 rounded-full text-white">
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
