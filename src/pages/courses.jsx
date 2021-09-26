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
	const courses = getCourses();

	return { props: { courses } };
}
