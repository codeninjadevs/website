import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import NavbarLessons from "./NavbarLessons";
import withAuth from "./withAuth";

function LessonsLayout({ children }) {
	const router = useRouter();

	return (
		<>
			<Head>
				<title>প্রোগ্রামিং শিখুন সম্পুর্ন বাংলায় - শাকিল আহমেদ</title>
			</Head>
			<NavbarLessons />
			{children}
		</>
	);
}

export default withAuth(LessonsLayout);
