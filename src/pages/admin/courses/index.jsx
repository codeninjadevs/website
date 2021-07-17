import React, { useState } from "react";
import { useRouter } from "next/router";
import { Row, Col, Button, Table, Space } from "antd";
import { PlusOutlined } from "@ant-design/icons";

export default function courses() {
	const router = useRouter();

	const handleAddCourse = () => {
		router.push("/admin/courses/new");
	};

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
				<Table columns={columns} dataSource={data} style={{ marginTop: 15 }} />
			</div>
		</>
	);
}

let formItems = [
	{
		label: "ID",
		name: "_id",
		placeholder: "Product ID",
		hidden: true,
	},
	{
		label: "Title",
		name: "title",
		placeholder: "Product Title",
		rules: [{ required: true, message: "Product must have a title" }],
	},
	{
		label: "Description",
		name: "description",
		placeholder: "Product Description",
		rules: [{ required: true, message: "Product must have a description" }],
	},
	{
		label: "Price",
		name: "price",
		placeholder: "Product Price",
		rules: [{ required: true, message: "Product must have a price" }],
	},
	{
		label: "Thumbnail",
		name: "image",
		placeholder: "Product Thumbnail",
	},
	{
		label: "Category",
		name: "category",
		placeholder: "Product Category",
		type: "select",
		data: [],
		rules: [{ required: true, message: "Product must have a category" }],
	},
];

const columns = [
	{
		title: "Thumbnail",
		dataIndex: "thumbnail",
		key: "thumbnail",
		width: 100,
		render: (path, record) => (
			<div>
				<img
					src={path}
					alt={record.title}
					style={{ height: 50, objectFit: "cover" }}
				/>
			</div>
		),
	},
	{
		title: "Title",
		dataIndex: "title",
		key: "title",
		render: (text) => <a>{text}</a>,
	},
	{
		title: "Category",
		dataIndex: "category",
		key: "category",
		render: (category) => category?.title,
	},
	{
		title: "Status",
		dataIndex: "status",
		key: "status",
	},
	{
		title: "Action",
		key: "action",
		render: (text, record) => (
			<Space size="middle">
				<a>Edit</a>
				<a>Delete</a>
			</Space>
		),
	},
];

const data = [
	{
		key: "1",
		title: "HTML - হাইপারটেক্সট মার্কআপ ল্যাঙ্গুয়েজ",
		thumbnail:
			"https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2018/11/what-is-html-1.jpg",
		category: {
			title: "Web",
		},
		status: "published",
	},
	{
		key: "3",
		title: "CSS - ক্যাসক্যাডিং স্টাইলশিট",
		thumbnail:
			"https://www.bitdegree.org/learn/storage/media/images/css-tutorial-img1-01.o.png",
		category: {
			title: "Web",
		},
		status: "draft",
	},
	{
		key: "4",
		title: "Javascript - জাভাস্ক্রিপ্ট",
		thumbnail:
			"https://res.cloudinary.com/practicaldev/image/fetch/s--ohpJlve1--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/drquzbncy/image/upload/v1586605549/javascript_banner_sxve2l.jpg",
		category: {
			title: "Web",
		},
		status: "draft",
	},
];
