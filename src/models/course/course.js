import { Schema } from "mongoose";
import slugify from "slugify";
import { moduleSchema } from "./module";

const courseSchema = new Schema({
	title: { type: String, required: true },
	description: { type: String, required: true },
	slug: { type: String, required: true },
	thumbnail: { type: String, required: true },
	outcome: { type: String },
	modules: [moduleSchema],
	category: { type: String, required: true },
	status: { type: String, required: true },
	createdAt: { type: String, required: true },
});

courseSchema.pre("validate", async function (this, next) {
	if (this.title) {
		this.slug = slugify(this.title, { lower: true, strict: true });
	}
	next();
});

export const Course =
	mongoose.models.Course || mongoose.model("Course", courseSchema);
