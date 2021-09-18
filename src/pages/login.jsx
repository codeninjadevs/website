import React from "react";
import { getProviders, getSession, signIn, useSession } from "next-auth/client";
import { Spin } from "antd";
import { outlinedSpinner } from "../components/lib/Spinners";

export default function Login({ providers }) {
	const [session, loading] = useSession();

	return (
		<div>
			<div
				className="flex items-center justify-center"
				style={{ height: "calc(100vh - 100px)" }}
			>
				{loading ? (
					<Spin indicator={outlinedSpinner} />
				) : (
					<div className="shadow w-96 p-5 rounded">
						<h2 className="text-center font-bold text-xl">
							Access your account
						</h2>
						<div className="mt-5">
							{Object.values(providers).map((provider) => (
								<div key={provider.name}>
									<button
										className="w-full py-2.5 px-5 block rounded bg-gray-800 text-center text-white hover:text-white hover:shadow-md focus:outline-none"
										onClick={() => signIn(provider.id)}
									>
										<i className="fab fa-github mr-3"></i>
										Login with {provider.name}
									</button>
								</div>
							))}
						</div>
					</div>
				)}
			</div>
		</div>
	);
}

export async function getServerSideProps({ req, res, query }) {
	const session = await getSession({ req });

	if (session && res) {
		let redirectUrl = query.callbackUrl || "/";
		res.writeHead(302, {
			Location: redirectUrl,
		});
		res.end();
	}

	const providers = await getProviders();
	return {
		props: { providers },
	};
}

const btnColor = [{ github: "bg-gray-800" }, { google: "bg-blue-500" }];
