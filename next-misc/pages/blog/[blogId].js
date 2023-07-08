import Head from "next/head"

export default function Blog({ title, description }) {
	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name="description" content={description} />
			</Head>
		</>
	)
}

export async function getServerSideProps() {
	const user = process.env.DB_USER
	const password = process.env.DB_PASSWORD
	console.log(
		`Connecting to database with username ${user} and password ${password}`
	)
	return {
		props: {
			title: "Article title",
			description: "Article description",
		},
	}
}
