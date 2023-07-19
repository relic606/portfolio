import Image from "next/image";

export default function App() {
	return (
		<main className="flex flex-col">
			<Image
				alt="My_Photo"
				height={300}
				width={300}
				className="place-self-center"
			></Image>
		</main>
	);
}
