import React from "react";
import CourseCard from "../components/CourseCard";
import courses from "../data/courses";

export default function Courses() {
	return (
		<div>
			<section className="my-5">
				<div className="container">
					<div className="grid grid-cols-4 gap-x-5 gap-y-6">
						{courses.map((course, idx) => (
							<CourseCard {...course} />
						))}
					</div>
				</div>
			</section>
		</div>
	);
}
