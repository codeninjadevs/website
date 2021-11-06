import React, { useEffect } from "react";
import { Col, Row, Form, Input, Select, Modal, Button, Drawer } from "antd";

const { Option } = Select;

export default function LessonDrawer({
	lessonModalVisible,
	setLessonModalVisible,
	handleSubmit,
	editedLesson,
}) {
	const [form] = Form.useForm();

	useEffect(() => {
		if (editedLesson) form.setFieldsValue(editedLesson);
	}, [editedLesson]);

	return (
		<Drawer
			title="Add a lesson"
			width={500}
			onClose={() => setLessonModalVisible(false)}
			visible={lessonModalVisible}
			bodyStyle={{ paddingBottom: 80, paddingTop: 10 }}
			className="course-drawer_administrator"
			footer={
				<div
					style={{
						textAlign: "right",
					}}
				>
					<Button
						onClick={() => setLessonModalVisible(false)}
						style={{ marginRight: 8 }}
					>
						Cancel
					</Button>
					<Button
						onClick={() => {
							handleSubmit({
								...form.getFieldsValue(),
								_id: editedLesson?._id,
							});
							setLessonModalVisible(false);
							form.resetFields();
						}}
						type="primary"
					>
						Save
					</Button>
				</div>
			}
		>
			<Form layout="vertical" form={form}>
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
				<Row gutter={16}>
					<Col span={24}>
						<Form.Item
							name="url"
							label="URL"
							rules={[{ required: true, message: "Please enter course url" }]}
						>
							<Input placeholder="Please enter course url" />
						</Form.Item>
					</Col>
				</Row>
				<Row gutter={16}>
					<Col span={24}>
						<Form.Item
							name="type"
							label="Type"
							rules={[{ required: true, message: "Please choose the type" }]}
						>
							<Select placeholder="Select the type">
								<Option value="video">Video</Option>
								<Option value="text">Text</Option>
							</Select>
						</Form.Item>
					</Col>
				</Row>
				<Row>
					<Col span={24}>
						<Form.Item name="overview" label="Overview">
							<Input.TextArea rows={4} placeholder="please enter overview" />
						</Form.Item>
					</Col>
				</Row>
			</Form>
			<style>{`
                .course-drawer_administrator .ant-upload.ant-upload-select {
                    display: block !important;
                }

				.course-drawer_administrator [data-theme="compact"]
					.site-collapse-custom-collapse
					.site-collapse-custom-panel,
				.course-drawer_administrator .site-collapse-custom-collapse .site-collapse-custom-panel {
					margin-bottom: 12px;
					overflow: hidden;
					background: #f7f7f7;
					border: 0px;
					border-radius: 2px;
				}
			`}</style>
		</Drawer>
	);
}
