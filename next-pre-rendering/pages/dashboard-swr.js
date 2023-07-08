import useSWR from "swr"

export default function DashboardSWR() {
	const { data, error, isLoading } = useSWR("dashboard", async () => {
		const response = await fetch("http://localhost:4000/dashboard")
		const data = await response.json()
		return data
	})

	if (error) return <h2>Error has occured</h2>
	if (isLoading) return <h2>Loading...</h2>

	return (
		<div>
			<h2>Dashboard</h2>
			<h2>Posts - {data.posts}</h2>
			<h2>Likes - {data.likes}</h2>
			<h2>Following - {data.following}</h2>
		</div>
	)
}
