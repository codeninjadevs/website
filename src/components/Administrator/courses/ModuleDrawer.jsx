import React from "react";
import { Col, Row, Form, Input, Select, Modal, Button, Drawer } from "antd";

const { Option } = Select;

export default function LessonDrawer({
	moduleModalVisible,
	setModuleModalVisible,
	handleSubmit,
}) {
	const [form] = Form.useForm();

	return (
		<Drawer
			title="Add a Module"
			width={500}
			onClose={() => setModuleModalVisible(false)}
			visible={moduleModalVisible}
			bodyStyle={{ paddingBottom: 80, paddingTop: 10 }}
			className="course-drawer_administrator"
			footer={
				<div
					style={{
						textAlign: "right",
					}}
				>
					<Button
						onClick={() => setModuleModalVisible(false)}
						style={{ marginRight: 8 }}
					>
						Cancel
					</Button>
					<Button
						onClick={() => {
							handleSubmit(form.getFieldsValue());
							setModuleModalVisible(false);
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
							name="status"
							label="Status"
							rules={[{ required: true, message: "Please choose the status" }]}
						>
							<Select placeholder="Select a status">
								<Option value="draft">Draft</Option>
								<Option value="publish">Publish</Option>
							</Select>
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
