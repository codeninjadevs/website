import React from "react";
import CourseCard from "../components/CourseCard";
import courses from "../data/courses";

export default function Courses() {
	return (
		<div>
			<section className="py-5">
				<div className="container">
					<div className="grid grid-cols-4 gap-x-5 gap-y-6">
						{courses.map((course, idx) => (
							<CourseCard key={idx} {...course} />
						))}
					</div>
				</div>
			</section>
		</div>
	);
}
