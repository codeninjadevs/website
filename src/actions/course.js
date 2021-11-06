import { message } from "antd";
import axios from "axios";

export const createOrUpdateCourse = async (data) => {
	try {
		if (data?.slug) {
			const res = await axios.put(`/api/courses/${data.slug}`, data);
			message.success("Course updated successfully");
			return res.data;
		}

		const res = await axios.post("/api/courses", data);
		message.success("Course created successfully");
		return res.data;
	} catch (err) {
		message.error("Something went wrong");
		console.log(err);
	}
};

export const deleteCourse = async (_id) => {
	try {
		const res = await axios.delete("/api/courses", { data: { _id } });
		return res.data;
	} catch (err) {
		console.log(err);
	}
};

export const createOrUpdateModule = async (data) => {
	try {
		if (data?._id) {
			const res = await axios.put("/api/courses/modules", data);
			return res.data;
		}

		const res = await axios.post("/api/courses/modules", data);
		return res.data;
	} catch (err) {
		console.log(err);
	}
};

export const getCourseModules = async (courseId) => {
	try {
		const res = await axios.get("/api/courses/modules", {
			params: { courseId },
		});
		return res.data;
	} catch (err) {
		console.log(err);
	}
};

export const deleteModule = async (moduleId) => {
	try {
		const res = await axios.delete("/api/courses/modules", {
			data: { _id: moduleId },
		});
		return res.data;
	} catch (err) {
		console.log(err);
	}
};

export const fetchLessons = async (moduleId) => {
	try {
		const res = await axios.get("/api/courses/lessons", {
			params: { moduleId },
		});
		return res.data;
	} catch (err) {
		console.log(err);
	}
};

export const createOrUpdateLesson = async (data) => {
	try {
		if (data?._id) {
			const res = await axios.put("/api/courses/lessons", data);
			return res.data;
		}

		const res = await axios.post("/api/courses/lessons", data);
		return res.data;
	} catch (err) {
		console.log(err);
	}
};

export const deleteLesson = async (lessonId) => {
	try {
		const res = await axios.delete(`/api/courses/lessons?id=${lessonId}`, {
			data: { _id: lessonId },
		});
		return res.data;
	} catch (err) {
		console.log(err);
	}
};
