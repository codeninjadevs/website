import NextAuth from "next-auth";
import Providers from "next-auth/providers";

export default NextAuth({
	providers: [
		Providers.GitHub({
			clientId: process.env.GITHUB_ID,
			clientSecret: process.env.GITHUB_SECRET,
		}),
		// Providers.Google({
		// 	clientId: process.env.GOOGLE_ID,
		// 	clientSecret: process.env.GOOGLE_SECRET,
		// }),
	],
	pages: {
		signIn: "/login",
		signOut: "/logout",
		error: "/auth/error",
		verifyRequest: "/auth/verify-request",
		newUser: null,
	},
	// database: process.env.DATABASE_URL,
});
