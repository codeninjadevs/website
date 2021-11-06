import { PlusOutlined } from "@ant-design/icons";
import { deleteCourse } from "actions/course";
import { Button, Col, message, Row, Table } from "antd";
import {
	Action,
	Thumbnail,
	Title,
} from "components/Administrator/courses/columns";
import { useRouter } from "next/router";
import { getCourses } from "pages/api/courses";
import React from "react";
import { categoryMap } from "utils/constant";

export default function courses({ courses }) {
	const router = useRouter();

	const handleAddCourse = () => {
		router.push("/admin/courses/new");
	};

	const handleDelete = async (_id) => {
		const data = await deleteCourse(_id);

		if (data) {
			message.success("Course deleted successfully");
			refreshData();
		} else {
			message.error("Something went wrong");
		}
	};

	const refreshData = () => router.replace(router.asPath);

	const columns = [
		{
			title: "Thumbnail",
			dataIndex: "thumbnail",
			key: "thumbnail",
			width: 100,
			render: Thumbnail,
		},
		{
			title: "Title",
			dataIndex: "title",
			key: "title",
			render: Title,
		},
		{
			title: "Category",
			dataIndex: "category",
			key: "category",
			render: (category) => categoryMap[category],
		},
		{
			title: "Status",
			dataIndex: "status",
			key: "status",
		},
		{
			title: "Action",
			key: "_id",
			dataIndex: "_id",
			render: (id, record) => <Action {...{ id, record, handleDelete }} />,
		},
	];

	return (
		<>
			<div className="mt-5">
				<Row>
					<Col span={24} style={{ textAlign: "right" }}>
						<Button
							type="primary"
							icon={<PlusOutlined />}
							onClick={handleAddCourse}
						>
							Add Course
						</Button>
					</Col>
				</Row>
				<Table
					rowKey="_id"
					columns={columns}
					dataSource={courses}
					style={{ marginTop: 15 }}
				/>
			</div>
		</>
	);
}

export async function getServerSideProps() {
	const courses = await getCourses();
	return { props: { courses: JSON.parse(JSON.stringify(courses)) } };
}
