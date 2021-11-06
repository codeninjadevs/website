import { createOrUpdateCourse } from "actions/course";
import { Button, Form } from "antd";
import Basic from "components/Administrator/courses/new/Basic";
import { useRouter } from "next/router";
import React from "react";

export default function New() {
	const [form] = Form.useForm();
	const router = useRouter();

	const handleFormSubmit = async () => {
		const values = form.getFieldsValue(true);
		values.thumbnail =
			"https://res.cloudinary.com/shakilahmmeed/image/upload/v1635058789/thumbnail-placeholder_t3pryr.jpg";
		values.outcomes = values.outcome.split("\n");
		const newCourse = await createOrUpdateCourse(values);

		if (newCourse) router.push("/admin/courses/" + newCourse.slug);
	};

	return (
		<div className="pt-6 mt-0.5 course-new">
			<Form
				layout="vertical"
				form={form}
				hideRequiredMark
				className="mb-5"
				onFinish={handleFormSubmit}
			>
				<div className="p-5 pb-0 bg-white">
					<Basic />
				</div>
				<Button type="primary" htmlType="submit" className="block ml-auto mt-3">
					Create
				</Button>
			</Form>
		</div>
	);
}
