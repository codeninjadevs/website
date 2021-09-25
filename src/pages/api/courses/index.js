import courseData from "../../../data/courses";

export default (req, res) => {
	if (req.method === "GET") {
		const courses = getCourses();
		return res.send(courses);
	}
};

const getCourses = () => {
	return courseData;
};
