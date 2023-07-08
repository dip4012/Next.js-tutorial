import Link from "next/link"

export default function Home() {
	return (
		<>
			<h1>NEXT JS pre-rendering</h1>
			<Link href="/users">Users</Link>
			<hr />
			<Link href="/posts">Posts</Link>
			<hr />
			<Link href="/news">News</Link>
			<hr />
		</>
	)
}
