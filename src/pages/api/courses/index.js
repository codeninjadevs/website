import courseData from "../../../data/courses";

export default (req, res) => {
	if (req.method === "GET") {
		const courses = getCourses();
		return res.send(courses);
	}
};

export const getCourses = () => {
	return courseData;
};
