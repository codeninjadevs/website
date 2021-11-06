import Course, { Module } from "models/course";
import { dbConnect } from "utils/database";

export default async (req, res) => {
	dbConnect();

	if (req.method === "GET") {
		try {
			const modules = await Module.findById(req.query.id).populate("lessons");
			return res.send(modules);
		} catch (err) {
			return res.send(err);
		}
	} else if (req.method === "POST") {
		try {
			const courseModule = new Module(req.body);
			const newModule = await courseModule.save();
			let ress = await Course.findByIdAndUpdate(
				req.body.course,
				{
					$push: { modules: newModule._id },
				},
				{ new: true, useFindAndModify: false }
			);
			return res.send(newModule);
		} catch (err) {
			console.log(err);
			res.send(err);
		}
	} else if (req.method === "PUT") {
		let moduleId = req.body._id;
		let updatedModule = req.body;

		let module = await Module.findOneAndUpdate(
			{ _id: moduleId },
			updatedModule,
			{ upsert: true, new: true }
		);
		return res.send(module);
	} else if (req.method === "DELETE") {
		const del = await Module.deleteOne({ _id: req.body._id });
		return res.send({ success: true, msg: "Module deleted successfully" });
	}
};
