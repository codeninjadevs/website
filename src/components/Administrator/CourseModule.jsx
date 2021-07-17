import React, { useState } from "react";
import {
	Button,
	Col,
	Collapse,
	List,
	Row,
	Form,
	Input,
	Select,
	Tabs,
} from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import accordionData from "../../data/accordionData";

const { Panel } = Collapse;
const { Option } = Select;
const { TabPane } = Tabs;

export default function CourseModule() {
	return (
		<div>
			<Form layout="vertical" hideRequiredMark>
				<Tabs defaultActiveKey="1" onChange={() => {}}>
					<TabPane tab="Module Info" key="1">
						<Row gutter={16}>
							<Col span={24}>
								<Form.Item
									name="module-title"
									label="Title"
									rules={[
										{ required: true, message: "Please enter module title" },
									]}
								>
									<Input placeholder="Please enter module title" />
								</Form.Item>
							</Col>
							<Col span={24}>
								<div className="flex justify-between items-center">
									<p>Contents</p>
								</div>
							</Col>
							<Col span={24}>
								<List
									size="small"
									dataSource={accordionData[0].contents}
									renderItem={(item) => (
										<List.Item
											style={{ paddingLeft: 6 }}
											extra={
												<div>
													<EditOutlined />
													<DeleteOutlined style={{ marginLeft: 10 }} />
												</div>
											}
										>
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
							</Col>
						</Row>
					</TabPane>
					<TabPane tab="Add Content" key="2">
						<Row gutter={16}>
							<Col span={24}>
								<Form.Item
									name="title"
									label="Title"
									rules={[
										{ required: true, message: "Please enter content title" },
									]}
									style={{ marginBottom: 10 }}
								>
									<Input placeholder="Please enter content title" />
								</Form.Item>
							</Col>
							<Col span={24}>
								<Form.Item
									name="url"
									label="URL"
									rules={[
										{ required: true, message: "Please enter content url" },
									]}
									style={{ marginBottom: 10 }}
								>
									<Input placeholder="Please enter content url" />
								</Form.Item>
							</Col>
							<Col span={24}>
								<Form.Item
									name="content-type"
									label="Type"
									rules={[
										{ required: true, message: "Please choose the status" },
									]}
									style={{ marginBottom: 10 }}
								>
									<Select placeholder="Select the content type">
										<Option value="video">Video</Option>
										<Option value="text">Text</Option>
									</Select>
								</Form.Item>
							</Col>
							<Col span={24}>
								<Form.Item name="content-overview" label="Overview">
									<Input.TextArea
										rows={4}
										placeholder="please enter content overview"
									/>
								</Form.Item>
							</Col>
						</Row>
					</TabPane>
				</Tabs>
			</Form>
		</div>
	);
}
