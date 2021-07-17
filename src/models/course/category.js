import { Schema } from "mongoose";
import slugify from "slugify";

const categorySchema = new Schema({
	title: { type: String, required: true },
	slug: { type: String, required: true },
});

categorySchema.pre("validate", async function (this, next) {
	if (this.title) {
		this.slug = slugify(this.title, { lower: true, strict: true });
	}
	next();
});

export const Category =
	mongoose.models.Category || mongoose.model("Category", categorySchema);
