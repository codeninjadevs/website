import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Progress } from "antd";
import courseData from "../data/courses";

export default function NavbarLessons() {
	const [course, setCourse] = useState({});
	const [progressPercent, setProgressPercent] = useState(70);
	const router = useRouter();
	const { slug } = router.query;

	useEffect(() => {
		setCourse(courseData.find((course) => course.slug === slug));
	}, []);

	return (
		<>
			<nav
				className="bg-gray-800 text-white shadow-md nav-lessons fixed w-full"
				style={{ zIndex: 999 }}
			>
				<div className="mx-auto px-2 sm:px-6 lg:px-8">
					<div className="flex items-center justify-between py-3">
						<div className="flex items-center justify-between">
							<Link href="/courses">
								<a className="text-white hover:text-white text-xl mr-5 pt-0.5">
									{/* <i className="fas fa-caret-square-left"></i> */}
									{/* <i className="fas fa-arrow-left"></i> */}
									<i className="fas fa-chevron-left"></i>
								</a>
							</Link>
							<h2 className="font-bold text-lg">
								<Link href="/">
									<a className="text-white hover:text-white inline-block mt-0.5">
										শাকিল আহমেদ
									</a>
								</Link>
							</h2>
							<div className="w-0.5 h-8 bg-gray-600 -mt-0.5 mx-4"></div>
							<div>{course?.title}</div>
						</div>
						<div className="flex items-center">
							<Progress
								type="circle"
								strokeWidth={4}
								width={40}
								percent={progressPercent}
							/>
							<div className="ml-2">আপনার অগ্রগতি</div>
						</div>
					</div>
				</div>
			</nav>
			<style>{`
				.nav-lessons .ant-progress-text {
					color: white !important;
				}
			`}</style>
		</>
	);
}
