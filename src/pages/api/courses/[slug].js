import courseData from "../../../data/courses";

export default (req, res) => {
	if (req.method === "GET") {
		const course = getCourseBySlug(req.query.slug);
		return res.send(course);
	}
};

export const getCourseBySlug = (slug) => {
	return courseData.find((course) => course.slug === slug);
};
