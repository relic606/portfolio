import Image from "next/image"

export default function ProfileCircle(){
    return (
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
        <Image
              alt="my_photo"
              height={250}
              width={250}
              className="place-self-center rounded-full bg-sky-100"
            ></Image>
      </div>
    );
}