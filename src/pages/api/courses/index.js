import Course from "models/course";
import courseData from "data/courses";
import { dbConnect } from "utils/database";

export default async (req, res) => {
	dbConnect();

	if (req.method === "GET") {
		const courses = await getCourses();
		return res.send(courses);
	} else if (req.method === "POST") {
		let course = await saveCourse(req.body);
		return res.send(course);
	} else if (req.method === "PUT") {
		let courseId = req.body._id;
		let updatedCourse = req.body;

		let course = await Course.findOneAndUpdate(
			{ _id: courseId },
			updatedCourse,
			{ upsert: true, new: true }
		);
		return res.send(course);
	} else if (req.method === "DELETE") {
		const del = await Course.deleteOne({ _id: req.body._id });
		return res.send({ success: true, msg: "Course deleted successfully" });
	}
};

export const getCourses = async ({ filter } = {}) => {
	dbConnect();
	try {
		const courses = await Course.find(filter ?? {}).populate({
			path: "modules",
			populate: { path: "lessons" },
		});
		return courses;
	} catch (err) {
		console.log(err);
	}
};

export const saveCourse = async (data) => {
	dbConnect();
	try {
		const course = Course(data);
		const savedCourse = await course.save();
		return savedCourse;
	} catch (err) {
		console.log(err);
	}
};
