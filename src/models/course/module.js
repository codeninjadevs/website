import { Schema } from "mongoose";
import slugify from "slugify";

export const moduleSchema = new Schema({
	title: { type: String, required: true },
    slug: {type: String, required: true},
	contents: [contentSchema]
});

moduleSchema.pre("validate", async function (this, next) {
	if (this.title) {
		this.slug = slugify(this.title, { lower: true, strict: true });
	}
	next();
});

export const Module =
	mongoose.models.Module || mongoose.model("Module", moduleSchema);

const contentSchema = new Schema({
    title: {type: String, required: true},
    overview: String,
    slug: {type: String, required: true},
    type: {type: String, required: true},
    content: {type: String, required: true}
})

contentSchema.pre("validate", async function (this, next) {
	if (this.title) {
		this.slug = slugify(this.title, { lower: true, strict: true });
	}
	next();
});