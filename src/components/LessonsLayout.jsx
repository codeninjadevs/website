import React from "react";
import Head from "next/head";
import NavbarLessons from "./NavbarLessons";

export default function LessonsLayout({ children }) {
	return (
		<div>
			<Head>
				<title>প্রোগ্রামিং শিখুন সম্পুর্ন বাংলায় - শাকিল আহমেদ</title>
			</Head>
			<NavbarLessons />
			{children}
		</div>
	);
}
