import { getServerSession } from "next-auth"
import { useSession } from "next-auth/react"
import { authOptions } from "./api/auth/[...nextauth]"

export default function Blog({ data }) {
	const { status } = useSession()

	if (status === "unauthenticated") {
		return <h1>Access denied</h1>
	}

	return <h1>{data}</h1>
}

export async function getServerSideProps(context) {
	const session = await getServerSession(context.req, context.res, authOptions)

	if (!session) {
		return {
			redirect: {
				destination: `/api/auth/signin`,
				permanent: false,
			},
		}
	}

	return {
		props: {
			session,
			data: "List of 100 blogs",
		},
	}
}
