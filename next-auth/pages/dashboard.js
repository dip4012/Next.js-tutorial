import { useSession } from "next-auth/react"

export default function Dashboard() {
	const { status } = useSession()

	if (status === "loading") {
		return <h1>Loading...</h1>
	}

	if (status === "unauthenticated") {
		return <p>Access denied</p>
	}

	return <h1>Dashboard page</h1>
}
