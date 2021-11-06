import Course from "models/course";
import { dbConnect } from "utils/database";

export default async (req, res) => {
	if (req.method === "GET") {
		const course = await getCourseBySlug(req.query.slug);
		return res.send(course);
	} else if (req.method === "PUT") {
		const updatedCourse = await updateCourse(req.body, req.query.slug);
		return res.send(updatedCourse);
	}
};

export const getCourseBySlug = async (slug) => {
	dbConnect();
	try {
		const course = await Course.findOne({ slug }).populate({
			path: "modules",
			populate: { path: "lessons" },
		});
		return course;
	} catch (err) {
		console.log(err);
	}
};

export const updateCourse = async (data, slug) => {
	dbConnect();

	try {
		let course = await Course.findOneAndUpdate({ slug: slug }, data, {
			upsert: true,
			new: true,
		});
		return course;
	} catch (err) {
		console.log(err);
	}
};
