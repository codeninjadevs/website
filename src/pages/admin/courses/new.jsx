import React, { useState } from "react";
import {
	Form,
	Button,
	Col,
	Row,
	Input,
	Select,
	Upload,
	List,
	Steps,
	Modal,
} from "antd";
import {
	UploadOutlined,
	PlusOutlined,
	DeleteOutlined,
	EditOutlined,
	SettingOutlined,
	ExclamationCircleOutlined,
} from "@ant-design/icons";
import accordionData from "../../../data/accordionData";
import ModuleDrawer from "../../../components/Administrator/courses/ModuleDrawer";
import LessonDrawer from "../../../components/Administrator/courses/LessonDrawer";

const { Step } = Steps;
const { Option } = Select;
const { confirm } = Modal;

export default function New() {
	const [current, setCurrent] = useState(0);
	const [currentModule, setCurrentModule] = useState(0);
	const [lessonModalVisible, setLessonModalVisible] = useState(false);
	const [moduleModalVisible, setModuleModalVisible] = useState(false);
	const [modules, setModules] = useState(accordionData);
	const [form] = Form.useForm();

	const normFile = (e) => {
		console.log("Upload event:", e);

		if (Array.isArray(e)) {
			return e;
		}

		return e && e.fileList;
	};

	const next = () => {
		setCurrent(current + 1);
	};

	const prev = () => {
		setCurrent(current - 1);
	};

	function showDeleteConfirm() {
		confirm({
			title: "Are you sure delete this lesson?",
			icon: <ExclamationCircleOutlined />,
			content: "This action can't be undone",
			okText: "Yes",
			okType: "danger",
			cancelText: "No",
			onOk() {
				console.log("OK");
			},
			onCancel() {
				console.log("Cancel");
			},
		});
	}

	return (
		<div className="pt-5 course-new">
			<Steps size="small" current={current}>
				<Step title="Basic" />
				<Step title="Modules" />
				<Step title="Outcome" />
			</Steps>
			<Form layout="vertical" form={form} hideRequiredMark className="my-5">
				{current === 0 ? (
					<div className="bg-white p-5 pb-0">
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
										<Button icon={<UploadOutlined />} style={{ width: "100%" }}>
											Click to upload
										</Button>
									</Upload>
								</Form.Item>
							</Col>
						</Row>
					</div>
				) : current === 1 ? (
					<div className="bg-white mt-5 p-5">
						<Row>
							<Col span={24}>
								<div className="text-right mb-3">
									<Button
										icon={<PlusOutlined />}
										onClick={() => setModuleModalVisible(true)}
									>
										Add Module
									</Button>
									<Button
										icon={<PlusOutlined />}
										style={{ marginLeft: 5 }}
										onClick={() => setLessonModalVisible(true)}
									>
										Add Lesson
									</Button>
								</div>

								{modules.length ? (
									<Row gutter={20}>
										<Col span={8}>
											{[1, 2, 3, 4, 5].map((item, idx) => (
												<div
													className="flex justify-between items-center border border-gray-400 rounded cursor-pointer my-2 p-3"
													style={
														idx === currentModule
															? {
																	background: "#1890ff",
																	color: "white",
																	border: "1px solid #1890ff",
															  }
															: null
													}
													onClick={() => setCurrentModule(idx)}
												>
													<span>Module {item}</span>
													<DeleteOutlined />
												</div>
											))}
										</Col>
										<Col span={16}>
											<List
												size="small"
												dataSource={accordionData[0].contents}
												renderItem={(item) => (
													<List.Item style={{ paddingLeft: 6 }}>
														<div className="flex items-center justify-between w-full">
															<div>
																<span className="mr-2 text-lg">
																	{item.type === "video" ? (
																		<i className="fas fa-play-circle"></i>
																	) : (
																		<i className="far fa-file-alt ml-0.5"></i>
																	)}
																</span>
																{item.title}
															</div>
															<div>
																<EditOutlined
																	className="cursor-pointer"
																	onClick={() => {}}
																/>
																<DeleteOutlined
																	className="cursor-pointer ml-4"
																	onClick={showDeleteConfirm}
																/>
															</div>
														</div>
													</List.Item>
												)}
											/>
										</Col>
									</Row>
								) : (
									<p className="text-center mt-10">
										No module added on this course
									</p>
								)}
							</Col>
						</Row>
					</div>
				) : (
					<div>three</div>
				)}
			</Form>
			<div className="text-right">
				{current > 0 && (
					<Button style={{ margin: "0 8px" }} onClick={() => prev()}>
						Previous
					</Button>
				)}
				{current < 3 - 1 && (
					<Button type="primary" onClick={() => next()}>
						Next
					</Button>
				)}
				{current === 3 - 1 && (
					<Button
						type="primary"
						onClick={() => message.success("Processing complete!")}
					>
						Done
					</Button>
				)}
			</div>
			{/* <LessonModal {...{ lessonModalVisible, setLessonModalVisible }} /> */}
			<LessonDrawer {...{ lessonModalVisible, setLessonModalVisible }} />
			<ModuleDrawer {...{ moduleModalVisible, setModuleModalVisible }} />

			<style jsx global>{`
				.course-new .ant-steps-item-title::after {
					background: #cac9c9 !important;
				}
			`}</style>
		</div>
	);
}
