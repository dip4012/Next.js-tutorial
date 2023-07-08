import { useRouter } from "next/router"

export default function Doc() {
	const router = useRouter()
	const { params = [] } = router.query

	return params.length ? (
		<h1>
			Viewing docs for feature {params[0]}{" "}
			{params.length == 2 && `and concept ${params[1]}`}
		</h1>
	) : (
		<h1>Docs home page</h1>
	)
}
