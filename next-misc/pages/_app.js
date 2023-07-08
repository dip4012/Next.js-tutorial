import "@/styles/globals.css"
import "@/styles/layout.css"

import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Head from "next/head"

export default function App({ Component, pageProps }) {
	if (Component.getLayout) {
		return Component.getLayout(<Component {...pageProps} />)
	}

	return (
		<>
			<Head>
				<title>My Awesome Space</title>
				<meta name="description" content="Awesome skills and works" />
			</Head>
			<Header />
			<Component {...pageProps} />
			<Footer />
		</>
	)
}
