import { DeleteOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Col, List, Row } from "antd";
import React, { useState } from "react";
import accordionData from "../../../../data/accordionData";
import { handleDelete } from "../actions/new";
import LessonDrawer from "../LessonDrawer";
import ModuleDrawer from "../ModuleDrawer";

export default function Modules() {
	const [modules, setModules] = useState(accordionData);
	const [currentModule, setCurrentModule] = useState(0);
	const [lessonModalVisible, setLessonModalVisible] = useState(false);
	const [moduleModalVisible, setModuleModalVisible] = useState(false);

	return (
		<>
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
											key={idx}
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
															onClick={handleDelete}
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
			<LessonDrawer {...{ lessonModalVisible, setLessonModalVisible }} />
			<ModuleDrawer {...{ moduleModalVisible, setModuleModalVisible }} />
		</>
	);
}
