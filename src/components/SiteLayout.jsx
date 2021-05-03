import React from "react";
import Navbar from "./Navbar";

export default function SiteLayout({ children }) {
	return (
		<div>
			<Navbar />
			{children}
		</div>
	);
}
