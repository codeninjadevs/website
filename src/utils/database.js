import mongoose from "mongoose";

export function dbConnect() {
	if (mongoose.connection.readyState === 0) {
		mongoose.connect(
			`${process.env.MONGO_URI}` || "mongodb://127.0.0.1:27017/levelup",
			{
				useNewUrlParser: true,
				useUnifiedTopology: true,
			}
		);
	}
}
