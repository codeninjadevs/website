import React, { useState } from "react";
import {
	Drawer,
	Form,
	Button,
	Col,
	Row,
	Input,
	Select,
	Upload,
	List,
	Steps,
	Tabs,
	Collapse,
} from "antd";
import {
	UploadOutlined,
	PlusOutlined,
	DeleteOutlined,
	EditOutlined,
	SettingOutlined,
	CaretRightOutlined,
} from "@ant-design/icons";
import CourseOutcome from "../Administrator/CourseOutcome";
import CourseModule from "../Administrator/CourseModule";
import { outcomes } from "../../data/courses";
import accordionData from "../../data/accordionData";

const { Step } = Steps;
const { Option } = Select;
const { TabPane } = Tabs;
const { Panel } = Collapse;

export default function CourseDrawer({ visible, setVisible, handleSubmit }) {
	const [childrenDrawerVisible, setChildrenDrawerVisible] = useState(false);
	const [childDrawerContentType, setChildDrawerContentType] =
		useState("outcomes");
	const [modules, setModules] = useState(accordionData);

	const [form] = Form.useForm();

	const normFile = (e) => {
		console.log("Upload event:", e);

		if (Array.isArray(e)) {
			return e;
		}

		return e && e.fileList;
	};

	const handleAddCourseModule = () => {
		setModules([...modules, modules.length]);
	};

	return (
		<div>
			<Drawer
				title="Create a new course"
				width={720}
				onClose={() => setVisible(false)}
				visible={visible}
				bodyStyle={{ paddingBottom: 80, paddingTop: 10 }}
				className="course-drawer_administrator"
				footer={
					<div
						style={{
							textAlign: "right",
						}}
					>
						<Button
							onClick={() => setVisible(false)}
							style={{ marginRight: 8 }}
						>
							Cancel
						</Button>
						<Button
							onClick={() => {
								handleSubmit(form.getFieldsValue());
							}}
							type="primary"
						>
							Save
						</Button>
					</div>
				}
			>
				<Form layout="vertical" form={form} hideRequiredMark>
					<Tabs defaultActiveKey="basic" onChange={() => {}}>
						<TabPane tab="Basic" key="basic">
							<Row gutter={16}>
								<Col span={24}>
									<Form.Item
										name="title"
										label="Title"
										rules={[
											{ required: true, message: "Please enter course title" },
										]}
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
												message: "please enter url description",
											},
										]}
									>
										<Input.TextArea
											rows={4}
											placeholder="please enter url description"
										/>
									</Form.Item>
								</Col>
							</Row>
							<Row gutter={16}>
								<Col span={12}>
									<Form.Item
										name="category"
										label="Category"
										rules={[
											{ required: true, message: "Please choose the category" },
										]}
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
										rules={[
											{ required: true, message: "Please choose the status" },
										]}
									>
										<Select placeholder="Select the status">
											<Option value="draft">Draft</Option>
											<Option value="publish">Publish</Option>
										</Select>
									</Form.Item>
								</Col>
							</Row>
							<Row>
								<Col span={24}>
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
											<Button
												icon={<UploadOutlined />}
												style={{ width: "100%" }}
											>
												Click to upload
											</Button>
										</Upload>
									</Form.Item>
								</Col>
							</Row>
						</TabPane>
						<TabPane tab="Modules" key="modules">
							<Row>
								<Col span={24}>
									<Button
										icon={<PlusOutlined />}
										style={{ marginLeft: "auto", display: "block" }}
										onClick={() => {
											setChildDrawerContentType("modules");
											setChildrenDrawerVisible(true);
										}}
									>
										Add Module
									</Button>
									{modules.length ? (
										<Collapse
											accordion
											bordered={false}
											expandIcon={({ isActive }) => (
												<CaretRightOutlined rotate={isActive ? 90 : 0} />
											)}
											expandIconPosition="left"
											style={{ marginTop: 10 }}
											onChange={() => {}}
											className="site-collapse-custom-collapse"
										>
											{modules.map((module, idx) => (
												<Panel
													header={module.header}
													key={idx}
													extra={<SettingOutlined />}
													className="site-collapse-custom-panel"
												>
													<List
														size="small"
														dataSource={accordionData[0].contents}
														renderItem={(item) => (
															<List.Item style={{ paddingLeft: 6 }}>
																<div className="flex items-center">
																	<span className="mr-2 text-lg">
																		{item.type === "video" ? (
																			<i className="fas fa-play-circle"></i>
																		) : (
																			<i className="far fa-file-alt ml-0.5"></i>
																		)}
																	</span>
																	{item.title}
																</div>
															</List.Item>
														)}
													/>
												</Panel>
											))}
										</Collapse>
									) : (
										<p className="text-center mt-10">
											No module added on this course
										</p>
									)}
								</Col>
							</Row>
						</TabPane>
						<TabPane tab="Outcomes" key="outcomes">
							<Row>
								<Col span={24}>
									<Button
										icon={<PlusOutlined />}
										style={{ marginLeft: "auto", display: "block" }}
										onClick={() => {
											setChildDrawerContentType("outcomes");
											setChildrenDrawerVisible(true);
										}}
									>
										Add Outcome
									</Button>
									<List
										size="small"
										bordered
										dataSource={outcomes}
										style={{ marginTop: 15 }}
										renderItem={(item) => (
											<List.Item
												extra={
													<div>
														<EditOutlined />
														<DeleteOutlined style={{ marginLeft: 10 }} />
													</div>
												}
											>
												{item}
											</List.Item>
										)}
									/>
								</Col>
							</Row>
						</TabPane>
					</Tabs>
					<Drawer
						title={
							childDrawerContentType === "outcomes"
								? "Add new outcome"
								: "Add new module"
						}
						bodyStyle={{ paddingTop: 10 }}
						width={320}
						onClose={() => setChildrenDrawerVisible(false)}
						visible={childrenDrawerVisible}
						footer={
							<div
								style={{
									textAlign: "right",
								}}
							>
								<Button onClick={() => {}} style={{ marginRight: 8 }}>
									Cancel
								</Button>
								<Button onClick={() => {}} type="primary">
									Add
								</Button>
							</div>
						}
					>
						{childDrawerContentType === "outcomes" ? (
							<CourseOutcome />
						) : (
							<CourseModule />
						)}
					</Drawer>
				</Form>
			</Drawer>
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
		</div>
	);
}
