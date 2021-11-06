import { Lesson, Module } from "models/course";
import { dbConnect } from "utils/database";

export default async (req, res) => {
	dbConnect();

	if (req.method === "GET") {
		try {
			const lesson = await Lesson.findById(req.query.id);
			return res.send(lesson);
		} catch (err) {
			return res.send(err);
		}
	} else if (req.method === "POST") {
		try {
			const lesson = new Lesson(req.body);
			const newLesson = await lesson.save();
			await Module.findByIdAndUpdate(
				req.body.module,
				{ $push: { lessons: newLesson._id } },
				{ new: true, useFindAndModify: false }
			);
			return res.send(newLesson);
		} catch (err) {
			res.send(err);
		}
	} else if (req.method === "PUT") {
		try {
			let lessonId = req.body._id;
			let updatedLesson = req.body;
			let lesson = await Lesson.findOneAndUpdate(
				{ _id: lessonId },
				updatedLesson,
				{ upsert: true, new: true }
			);
			return res.send(lesson);
		} catch (err) {
			res.send(err);
		}
	} else if (req.method === "DELETE") {
		try {
			await Lesson.deleteOne({ _id: req.query.id });
			return res.send({ success: true, msg: "Lessons deleted successfully" });
		} catch (err) {
			res.send(err);
		}
	}
};
