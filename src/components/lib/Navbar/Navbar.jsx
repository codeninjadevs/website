import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/client";
import { useRouter } from "next/router";
import { Drawer } from "antd";

export default function Navbar() {
	const [session, loading] = useSession();
	const [toggle, setToggle]=useState(false);

	const router = useRouter();
	const resetToggle = ()=>{
		setToggle(false);
	}

	useEffect(()=>{
		const handleRouterChange=()=>{
			resetToggle();
		};
		router.events.on("routeChangeComplete", handleRouterChange);
		return () => {
			router.events.off('routeChangeComplete', handleRouterChange);
		  };
	}, [router]);

	const handleLoginLogout = () => {
		if (session) {
			signOut();
		} else {
			signIn();
		}
	};
	return (
		<nav
			className="bg-gray-50 shadow primary fixed w-full flex justify-between h-16 items-center px-14"
			style={{ zIndex: 999 }}
		>
			<div>
				<Link href="/">
					<a className="font-bold text-lg">শাকিল আহমেদ</a>
				</Link>
			</div>
			<div className="flex">
				<div className="invisible sm:visible">
					<Link href="/courses">
						<a className="text-gray-900 text-sm font-semibold">কোর্সসমূহ</a>
					</Link>
					<button
						className="bg-gray-900 text-white px-4 py-2 pb-1 ml-5 rounded-md text-sm font-medium hover:text-white focus:outline-none"
						id="btn1"
						onClick={handleLoginLogout}
					>
						{session ? "লগআউট" : "লগিন"}
					</button>
				</div>
				<button type="button" className="visible sm:invisible" onClick={()=>{setToggle(!toggle)}}>
					<svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
						<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
					</svg>
				</button>
				<Drawer
					open={toggle}
					onClose={()=>{
						setToggle(false)
					}}
					width={200}
				>
					<div className="flex flex-col">
					<Link href="/courses">
						<a className="text-gray-900 text-sm font-semibold">কোর্সসমূহ</a>
					</Link>
					<button
						className="bg-gray-900 text-white px-4 py-2 pb-1 mt-3 rounded-md text-sm font-medium hover:text-white focus:outline-none w-16"
						id="btn1"
						onClick={handleLoginLogout}
					>
						{session ? "লগআউট" : "লগিন"}
					</button>
					</div>
				</Drawer>
			</div>
		</nav>
	);
};
