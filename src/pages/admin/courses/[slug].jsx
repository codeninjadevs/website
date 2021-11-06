import { Button, Modal, Form } from "antd";
import {
	EditOutlined,
	DeleteOutlined,
	EyeOutlined,
	FolderOpenOutlined,
} from "@ant-design/icons";
import { getCourseBySlug } from "pages/api/courses/[slug]";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Modules from "components/Administrator/courses/new/Modules";
import { categoryMap } from "utils/constant";
import Basic from "components/Administrator/courses/new/Basic";
import { createOrUpdateCourse } from "actions/course";

export default function CourseDetail({ course }) {
	const [editModalVisible, setEditModalVisible] = useState(false);
	const [form] = Form.useForm();
	const router = useRouter();

	useEffect(() => {
		form.setFieldsValue({ ...course, outcome: course.outcomes.join("\n") });
	}, []);

	const handleEdit = async () => {
		const values = form.getFieldsValue(true);
		const newCourse = await createOrUpdateCourse({
			...values,
			slug: course?.slug,
			outcomes: values.outcome.split("\n"),
		});

		if (newCourse && Object.keys(newCourse).length) {
			setEditModalVisible(false);
			refreshData();
		}
	};

	const refreshData = () => {
		console.log("refresing data");
		router.replace(router.asPath);
	};

	return (
		<section>
			<div className="flex items-center justify-between mt-6">
				<h1 className="font-bold text-2xl">{course.title}</h1>
				<div>
					<Button
						type="primary"
						icon={<EditOutlined />}
						onClick={() => setEditModalVisible(true)}
					>
						Edit
					</Button>
					<Button
						disabled
						type="primary"
						danger
						icon={<DeleteOutlined />}
						className="ml-2"
					>
						Delete
					</Button>
				</div>
			</div>
			<p className="w-3/4 mt-3">{course.description}</p>
			<div className="mt-2">
				<span>
					<FolderOpenOutlined className="mr-2" />
					{categoryMap[course.category]}
				</span>
				<span className="ml-3">
					<EyeOutlined className="mr-2" />
					{course.status}
				</span>
			</div>
			<div className="mt-10">
				<Modules
					modules={course.modules}
					refreshData={refreshData}
					courseId={course._id}
				/>
			</div>

			<Modal
				title="Edit Course"
				visible={editModalVisible}
				width={700}
				centered
				onOk={handleEdit}
				onCancel={() => setEditModalVisible(false)}
			>
				<Form layout="vertical" form={form} hideRequiredMark className="mb-5">
					<Basic />
				</Form>
			</Modal>
		</section>
	);
}

export async function getServerSideProps({ query }) {
	const course = (await getCourseBySlug(query.slug)) ?? {};

	return { props: { course: JSON.parse(JSON.stringify(course)) } };
}
