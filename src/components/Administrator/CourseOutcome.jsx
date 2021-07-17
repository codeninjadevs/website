import React from "react";
import { Button, Col, Form, Input, Row } from "antd";
import { PlusOutlined, MinusCircleOutlined } from "@ant-design/icons";

export default function CourseOutcome() {
	return (
		<Row gutter={16}>
			<Col span={24}>
				<Form.List name="outcomes">
					{(fields, { add, remove }, { errors }) => (
						<>
							{fields.map((field, index) => (
								<Form.Item
									label={index === 0 ? "Outcomes" : ""}
									key={field.key}
								>
									<Form.Item
										{...field}
										validateTrigger={["onChange", "onBlur"]}
										rules={[
											{
												required: true,
												whitespace: true,
												message:
													"Please input an outcome or delete this field.",
											},
										]}
										noStyle
									>
										<Input
											placeholder="outcome title"
											style={{ width: "90%" }}
										/>
									</Form.Item>
									<MinusCircleOutlined
										className="dynamic-delete-button"
										style={{ marginLeft: 10 }}
										onClick={() => remove(field.name)}
									/>
								</Form.Item>
							))}
							<Form.Item>
								<Button
									type="dashed"
									onClick={() => add()}
									style={{ width: "100%" }}
									icon={<PlusOutlined />}
								>
									Add Outcome
								</Button>
								<Form.ErrorList errors={errors} />
							</Form.Item>
						</>
					)}
				</Form.List>
			</Col>
		</Row>
	);
}
