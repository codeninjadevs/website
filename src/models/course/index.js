import mongoose, { Schema } from "mongoose";
import slugify from "slugify";
import { generateRandomString } from "utils/misc";

const courseSchema = new Schema({
	title: { type: String, required: true },
	description: { type: String, required: true },
	slug: { type: String, required: true },
	thumbnail: { type: String, required: true },
	outcomes: { type: [String] },
	category: { type: String, required: true },
	status: { type: String, required: true },
	themeColor: { type: String, required: true },
	modules: [{ type: Schema.Types.ObjectId, ref: "Module" }],
	priority: { type: String, default: "1" },
	createdAt: { type: String, default: Date.now },
});

courseSchema.pre("validate", async function (next) {
	if (this.title) {
		this.slug =
			slugify(this.title, { lower: true, strict: true }) +
			generateRandomString({ prefix: "-" });
	}
	next();
});

const Course =
	mongoose.models?.Course || mongoose.model("Course", courseSchema);

export default Course;

// MODULE MODEL START
export const moduleSchema = new Schema({
	title: { type: String, required: true },
	slug: { type: String },
	status: { type: String, required: true },
	priority: { type: String, default: "1" },
	lessons: [{ type: Schema.Types.ObjectId, ref: "Lesson" }],
});

moduleSchema.pre("validate", async function (next) {
	if (this.title) {
		this.slug =
			slugify(this.title, { lower: true, strict: true }) +
			generateRandomString({ prefix: "-" });
	}
	next();
});

export const Module =
	mongoose.models?.Module || mongoose.model("Module", moduleSchema);

// LESSON MODEL START
const lessonSchema = new Schema({
	title: { type: String, required: true },
	slug: { type: String, required: true },
	url: { type: String, required: true },
	type: { type: String, required: true },
	overview: String,
	priority: { type: String, default: "1" },
	module: { type: Schema.Types.ObjectId, required: true },
});

lessonSchema.pre("validate", async function (next) {
	if (this.title) {
		this.slug =
			slugify(this.title, { lower: true, strict: true }) +
			generateRandomString({ prefix: "-" });
	}
	next();
});

export const Lesson =
	mongoose.models?.Lesson || mongoose.model("Lesson", lessonSchema);
