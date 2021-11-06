import {
	DeleteOutlined,
	EditOutlined,
	PlusOutlined,
	HighlightOutlined,
} from "@ant-design/icons";
import {
	createOrUpdateLesson,
	createOrUpdateModule,
	deleteLesson,
	deleteModule,
} from "actions/course";
import { Button, Col, List, Popconfirm, Row, Spin } from "antd";
import { outlinedSpinner } from "components/lib/Spinners";
import React, { useState } from "react";
import LessonDrawer from "../LessonDrawer";
import ModuleDrawer from "../ModuleDrawer";

export default function Modules({ modules, refreshData, courseId }) {
	const [currentModule, setCurrentModule] = useState(0);
	const [editedModule, setEditedModule] = useState();
	const [editedLesson, setEditedLesson] = useState();
	const [lessonModalVisible, setLessonModalVisible] = useState(false);
	const [moduleModalVisible, setModuleModalVisible] = useState(false);

	const addModule = async (values) => {
		values.course = courseId;
		const tempModule = await createOrUpdateModule(values);

		if (tempModule) {
			setEditedModule();
			refreshData();
		}
	};

	const handleEditModule = async (moduleId) => {
		setEditedModule(modules.find((module) => module._id === moduleId));
		setModuleModalVisible(true);
	};

	const handleDeleteModule = async (moduleId) => {
		let res = await deleteModule(moduleId);
		if (res) refreshData();
	};

	const addLesson = async (values) => {
		values.module = modules[currentModule]?._id;
		const tempLesson = await createOrUpdateLesson(values);

		if (tempLesson) {
			setEditedLesson();
			refreshData();
		}
	};

	const handleEditLesson = async (lessonId) => {
		setEditedLesson(
			modules[currentModule].lessons.find((lesson) => lesson._id === lessonId)
		);
		setLessonModalVisible(true);
	};

	const handleLessonDelete = async (lessonId) => {
		let res = await deleteLesson(lessonId);
		if (res) refreshData();
	};

	return (
		<>
			<div className="bg-white mt-5 p-5 rounded">
				{modules ? (
					<Row>
						<Col span={24}>
							{modules?.length ? (
								<Row gutter={20}>
									<Col span={8}>
										<div className="flex flex-col justify-between h-full">
											<div>
												{modules.map((module, idx) => (
													<div
														key={module._id}
														className="flex justify-between items-center border border-gray-400 rounded cursor-pointer mb-2"
														style={
															idx === currentModule
																? {
																		background: "#1890ff",
																		color: "white",
																		border: "1px solid #1890ff",
																  }
																: null
														}
													>
														<div
															className="flex-1 h-full p-3 flex items-center"
															onClick={() => setCurrentModule(idx)}
														>
															{module.title}
															{module.status === "draft" ? (
																<HighlightOutlined className="ml-1.5" />
															) : null}
														</div>
														<div className="p-3">
															<EditOutlined
																onClick={() => handleEditModule(module._id)}
															/>
															<Popconfirm
																title="Are you sure to delete this module?"
																onConfirm={() => handleDeleteModule(module._id)}
																okText="Yes"
																cancelText="No"
															>
																<DeleteOutlined className="ml-3" />
															</Popconfirm>
														</div>
													</div>
												))}
											</div>
											<Button
												icon={<PlusOutlined />}
												block
												size="large"
												className="rounded mt-3"
												onClick={() => setModuleModalVisible(true)}
											>
												Add Module
											</Button>
										</div>
									</Col>
									<Col span={16}>
										<Button
											icon={<PlusOutlined />}
											className="rounded block ml-auto mb-3.5"
											onClick={() => setLessonModalVisible(true)}
										>
											Add Lesson
										</Button>
										<List
											size="small"
											dataSource={modules[currentModule].lessons}
											renderItem={(lesson) => (
												<List.Item style={{ paddingLeft: 6 }}>
													<div className="flex items-center justify-between w-full">
														<div className="flex items-center">
															<span className="mr-2 text-lg">
																{lesson.type === "video" ? (
																	<i className="fas fa-play-circle"></i>
																) : (
																	<i className="far fa-file-alt ml-0.5"></i>
																)}
															</span>
															{lesson.title}
															{lesson.status === "draft" ? (
																<HighlightOutlined className="ml-1.5" />
															) : null}
														</div>
														<div>
															<EditOutlined
																className="cursor-pointer"
																onClick={() => handleEditLesson(lesson._id)}
															/>
															<Popconfirm
																title="Are you sure to delete this module?"
																placement="left"
																onConfirm={() => handleLessonDelete(lesson._id)}
																okText="Yes"
																cancelText="No"
															>
																<DeleteOutlined className="cursor-pointer ml-4" />
															</Popconfirm>
														</div>
													</div>
												</List.Item>
											)}
										/>
									</Col>
								</Row>
							) : (
								<div className="text-center py-10">
									<p>No module added on this course</p>
									<Button
										type="primary"
										icon={<PlusOutlined />}
										className="mt-2"
										onClick={() => setModuleModalVisible(true)}
									>
										Add Module
									</Button>
								</div>
							)}
						</Col>
					</Row>
				) : (
					<div
						className="flex justify-center items-center"
						style={{ minHeight: 250 }}
					>
						<Spin indicator={outlinedSpinner} />
					</div>
				)}
			</div>
			{/* TODO: rename the state */}
			<LessonDrawer
				{...{
					lessonModalVisible,
					setLessonModalVisible,
					handleSubmit: addLesson,
					editedLesson,
				}}
			/>
			<ModuleDrawer
				{...{
					moduleModalVisible,
					setModuleModalVisible,
					handleSubmit: addModule,
					editedModule,
				}}
			/>
		</>
	);
}
