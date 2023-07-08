import Link from "next/link"
import { signIn, signOut, useSession } from "next-auth/react"

export default function Navbar() {
	const { data, status } = useSession()
	// console.log({ data: data, status: status })
	return (
		<nav className="header">
			<h1 className="logo">
				<a href="#">NextAuth</a>
			</h1>
			<ul className="main-nav">
				<li>
					<Link href="/">Home</Link>
				</li>
				{data && (
					<li>
						<Link href="/dashboard">Dashboard</Link>
					</li>
				)}
				<li>
					<Link href="/blog">Blog</Link>
				</li>
				{data ? (
					<li>
						<Link
							href="#"
							onClick={(e) => {
								e.preventDefault()
								signOut()
							}}
						>
							Sign Out
						</Link>
					</li>
				) : (
					<li>
						<Link
							href="#"
							onClick={(e) => {
								e.preventDefault()
								signIn()
							}}
						>
							Sign In
						</Link>
					</li>
				)}
			</ul>
		</nav>
	)
}
