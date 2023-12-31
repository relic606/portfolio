"use client";

import Header from "./components/Header";
import globalStyles from "../styles/global.css";
import { useEffect } from "react";
import Head from "next/head";

import { Inter } from "next/font/google";

const inter = Inter({
	subsets: ["latin"]
});

// export const metadata = {
// 	title: "Andrew Anderson's Portfolio",
// 	description: "Generated by Next.js"
// };

export default function RootLayout({ children }) {
	useEffect(() => {
		(function (c, l, a, r, i, t, y) {
			c[a] =
				c[a] ||
				function () {
					(c[a].q = c[a].q || []).push(arguments);
				};
			t = l.createElement(r);
			t.async = 1;
			t.src = "https://www.clarity.ms/tag/" + i;
			y = l.getElementsByTagName(r)[0];
			y.parentNode.insertBefore(t, y);
		})(window, document, "clarity", "script", "jh9ciqtndq");
	}, []);

	return (
		<html lang="en">
			{/* <Head>
				<title>Andrew Anderson&apos;s Portfolio</title>
			</Head> */}
			<body className={`bg-sky-100 h-screen ${inter.className}`}>
				<Header />
				{children}
				{/* <Footer /> */}
			</body>
		</html>
	);
}
