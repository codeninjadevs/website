import { Col, Form, Input, Row, Select } from "antd";
import React from "react";

const { Option } = Select;

export default function Basic() {
	const normFile = (e) => {
		console.log("Upload event:", e);

		if (Array.isArray(e)) {
			return e;
		}

		return e && e.fileList;
	};

	return (
		<>
			<Row gutter={16}>
				<Col span={24}>
					<Form.Item
						name="title"
						label="Title"
						rules={[{ required: true, message: "Please enter course title" }]}
					>
						<Input placeholder="Please enter course title" />
					</Form.Item>
				</Col>
			</Row>
			<Row>
				<Col span={24}>
					<Form.Item
						name="description"
						label="Description"
						rules={[
							{
								required: true,
								message: "please enter course description",
							},
						]}
					>
						<Input.TextArea rows={4} placeholder="please enter description" />
					</Form.Item>
				</Col>
			</Row>
			<Row gutter={16}>
				<Col span={12}>
					<Form.Item
						name="category"
						label="Category"
						rules={[{ required: true, message: "Please choose the category" }]}
					>
						<Select placeholder="Select a category">
							<Option value="web-development">Web Development</Option>
							<Option value="data-science">Data Science</Option>
						</Select>
					</Form.Item>
				</Col>
				<Col span={12}>
					<Form.Item
						name="status"
						label="Status"
						rules={[{ required: true, message: "Please choose the status" }]}
					>
						<Select placeholder="Select the status">
							<Option value="published">Publish</Option>
							<Option value="draft">Draft</Option>
							<Option value="upcoming">Upcoming</Option>
						</Select>
					</Form.Item>
				</Col>
			</Row>
			<Row gutter={16}>
				<Col span={12}>
					<Form.Item
						name="themeColor"
						label="Theme Color"
						rules={[{ required: true, message: "Please enter theme color" }]}
					>
						<Input placeholder="Please enter course theme color" />
					</Form.Item>
				</Col>
				{/* <Col span={12}>
					<Form.Item
						name="thumbnail"
						label="Thumbnail"
						valuePropName="fileList"
						getValueFromEvent={normFile}
					>
						<Upload
							name="thumb"
							action="/upload.do"
							listType="picture"
							style={{ width: "100%" }}
						>
							<Button icon={<UploadOutlined />} style={{ width: "100%" }}>
								Click to upload
							</Button>
						</Upload>
					</Form.Item>
				</Col> */}
			</Row>
			<Row>
				<Col span={24}>
					<Form.Item name="outcome" label="Outcome">
						<Input.TextArea rows={4} placeholder="please enter outcome" />
					</Form.Item>
				</Col>
			</Row>
		</>
	);
}
