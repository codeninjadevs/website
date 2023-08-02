import courseData from "data/courses";
import React from "react";
import CourseCard from "../components/lib/CourseCard";
import { getCourses } from "./api/courses";

export default function Courses({ courses }) {
	return (
		<div>
			<section className="py-5">
				<div className="container">
					{courses ? (
						<div className="grid grid-cols-4 gap-x-5 gap-y-6">
							{courses.map((course, idx) => (
								<CourseCard key={idx} {...course} />
							))}
						</div>
					) : null}
				</div>
			</section>
		</div>
	);
}

export async function getServerSideProps() {
	const courses = (
		await getCourses({
			filter: { status: { $ne: "draft" } },
		})
	)?.sort((a, b) => (a.priority < b.priority ? 1 : -1));
	return { props: { courses:JSON.parse(JSON.stringify(courses))}};
}
