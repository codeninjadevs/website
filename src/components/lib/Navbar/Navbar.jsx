import React from "react";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/client";

export default function Navbar() {
	const [session, loading] = useSession();

	const handleLoginLogout = () => {
		if (session) {
			signOut();
		} else {
			signIn();
		}
	};

	return (
		<nav
			className="bg-gray-50 shadow primary fixed w-full"
			style={{ zIndex: 999 }}
		>
			<div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between py-3">
					<div className="flex-shrink-0 flex items-center justify-between">
						<h2 className="font-bold text-lg">
							<Link href="/">
								<a>শাকিল আহমেদ</a>
							</Link>
						</h2>
					</div>
					<div className="hidden sm:block sm:ml-6">
						<div className="flex items-center">
							<Link href="/courses">
								<a className="text-gray-900 text-sm font-semibold">কোর্সসমূহ</a>
							</Link>
							<button
								className="bg-gray-900 text-white px-4 py-2 pb-1 ml-5 rounded-md text-sm font-medium hover:text-white focus:outline-none"
								onClick={handleLoginLogout}
							>
								{session ? "লগআউট" : "লগিন"}
							</button>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
}
