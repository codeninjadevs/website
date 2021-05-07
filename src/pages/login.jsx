import React from "react";

export default function Roadmap() {
	return (
		<div>
			<div
				className="flex items-center justify-center"
				style={{ height: "calc(100vh - 100px)" }}
			>
				<div className="shadow w-96 p-5 rounded">
					<h2 className="text-center font-bold text-xl">Access your account</h2>
					<div className="mt-5">
						<a
							href="#"
							className="py-2.5 px-5 block rounded bg-gray-800 text-center text-white hover:text-white hover:shadow-md"
						>
							<i className="fab fa-github mr-3"></i>
							Login with GitHub
						</a>
						<a
							href="#"
							className="mt-2 py-2.5 px-5 block rounded bg-blue-500 text-center text-white hover:text-white hover:shadow-md"
						>
							<i className="fab fa-google mr-3"></i>
							Login with Google
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
