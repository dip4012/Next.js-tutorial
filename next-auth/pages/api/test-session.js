import { getServerSession } from "next-auth"
import { authOptions } from "./auth/[...nextauth]"

export default async function handler(req, res) {
	const session = await getServerSession(req, res, authOptions)

	if (session) {
		res.status(200).json({ message: "Success", session })
	} else {
		res.status(401).json({ error: "Unauthenticated user" })
	}
}
