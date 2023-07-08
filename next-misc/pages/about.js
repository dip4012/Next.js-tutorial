import Footer from "@/components/Footer"
import Head from "next/head"

export default function About() {
	return (
		<>
			<Head>
				<title>About Me</title>
				<meta name="description" content="Free tutorials on web development" />
			</Head>
			<h1 className="content">About</h1>
		</>
	)
}

About.getLayout = function PageLayout(page) {
	return (
		<>
			{page}
			<Footer />
		</>
	)
}
