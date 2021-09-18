import React from "react";
import Head from "next/head";
import Navbar from "../Navbar/Navbar";

export default function SiteLayout({ children }) {
	return (
		<div>
			<Head>
				<title>প্রোগ্রামিং শিখুন সম্পুর্ন বাংলায় - শাকিল আহমেদ</title>
			</Head>
			<Navbar />
			<div style={{ height: 56 }}></div>
			{children}
		</div>
	);
}
