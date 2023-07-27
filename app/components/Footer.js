import githubImg from "../../github.png";
import linkedinImg from "../../linkedin.jpg";
import mailImg from "../../mail.png";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-sky-950 text-white sticky top-[100vh] h-12 flex items-center">
      <nav className="flex place-content-center w-screen">
        <a
          target="_blank"
          href={"https://github.com/relic606"}
          className="hover:text-sky-500 transition delay-50 px-8 flex"
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
          className="hover:text-sky-500 transition delay-50 px-8 flex"
        >
          <Image
            height={30}
            width={30}
            src={linkedinImg}
            className="rounded-full"
          ></Image>
          <p className="pl-2">LinkedIn</p>
        </a>
        <div className="flex px-4">
          <Image
            height={30}
            width={47}
            src={mailImg}
            className="bg-white rounded-full"
          ></Image>
          <p className="px-2">relic606@yahoo.com</p>
        </div>
      </nav>
    </footer>
  );
}
