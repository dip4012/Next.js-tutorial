import clientPromise from "@/lib/mongodb"
import { MongoDBAdapter } from "@auth/mongodb-adapter"
import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"

export const authOptions = {
	providers: [
		GitHub({
			clientId: process.env.GITHUB_ID,
			clientSecret: process.env.GITHUB_SECRET,
		}),
	],
	session: {
		strategy: "jwt",
	},
	adapter: MongoDBAdapter(clientPromise),
	callbacks: {
		async jwt({ token, account, profile }) {
			if (account) {
				token.accessToken = account.access_token
				token.id = profile.id
			}

			return token
		},
		async session({ session, token, user }) {
			session.accessToken = token.accessToken
			session.user.id = token.sub

			return session
		},
	},
}

export default NextAuth(authOptions)
