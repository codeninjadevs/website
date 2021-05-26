import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
	name: { type: String, required: true },
	username: { type: String, required: true },
	email: { type: String },
	avatar: { type: String },
	githubId: { type: String, required: true },
	role: { type: String, default: "user" },
	createdAt: { type: Date, default: Date.now },
});

export const CustomUser =
	mongoose.models.CustomUser || mongoose.model("CustomUser", userSchema);
