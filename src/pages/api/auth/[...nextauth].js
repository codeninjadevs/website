import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import { dbConnect } from "../../../lib/database";
import { CustomUser } from "../../models/user";

export default NextAuth({
	providers: [
		Providers.GitHub({
			clientId: process.env.GITHUB_ID,
			clientSecret: process.env.GITHUB_SECRET,
		}),
	],
	pages: {
		signIn: "/login",
		signOut: "/logout",
		error: "/auth/error",
		verifyRequest: "/auth/verify-request",
		newUser: null,
	},
	callbacks: {
		async jwt(token, user, account, profile, isNewUser) {
			if (user && profile) {
				dbConnect();
				let existingUser = await CustomUser.findOne({ githubId: user.id });
				if (existingUser === null) {
					let newUser = new CustomUser({
						name: user.name,
						email: user.email,
						username: profile.login,
						githubId: user.id,
						avatar: user.image,
						role: "user",
					});

					await newUser.save();
				}

				token.role = existingUser?.role || "user";
			}

			return token;
		},

		async session(session, token) {
			session.user.role = token.role;
			return session;
		},
	},
});
