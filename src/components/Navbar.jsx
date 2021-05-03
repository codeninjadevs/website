import React from "react";
import Link from "next/link";

export default function Navbar() {
	return (
		<nav className="bg-gray-50 shadow">
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
								<a className="text-gray-900 text-sm font-semibold">কোর্সগুলো</a>
							</Link>
							<Link href="/roadmap">
								<a className="bg-gray-900 text-white px-3 py-2 ml-5 rounded-md text-sm font-medium">
									রোডম্যাপ
								</a>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
}
