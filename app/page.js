import Image from "next/image";

export default function App() {
	return (
		<main className="flex flex-col">
			<Image
				alt="my_photo"
				height={300}
				width={300}
				className="place-self-center rounded-full bg-white my-8"
			></Image>
			<section className="mx-auto">Home page description</section>
		</main>
	);
}
