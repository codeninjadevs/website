import { Form, Steps } from "antd";
import React, { useState } from "react";
import Basic from "../../../components/Administrator/courses/new/Basic";
import Modules from "../../../components/Administrator/courses/new/Modules";
import Outcome from "../../../components/Administrator/courses/new/Outcome";
import StepController from "../../../components/Administrator/courses/new/StepController";

const { Step } = Steps;

export default function New() {
	const [currentStep, setCurrentStep] = useState(0);
	const [form] = Form.useForm();

	const next = () => setCurrentStep(currentStep + 1);
	const prev = () => setCurrentStep(currentStep - 1);
	const handleFormSubmit = () => {
		const values = form.getFieldsValue(true);
		console.log("🚀 ~ file:  ~ values", values);
	};

	return (
		<div className="pt-5 course-new">
			<Steps size="small" current={currentStep}>
				<Step title="Basic" />
				<Step title="Modules" />
				<Step title="Outcome" />
			</Steps>
			<Form
				layout="vertical"
				form={form}
				hideRequiredMark
				className="my-5"
				onFinish={handleFormSubmit}
			>
				{currentStep === 0 ? (
					<Basic />
				) : currentStep === 1 ? (
					<Modules />
				) : (
					<Outcome />
				)}

				<StepController {...{ currentStep, prev, next }} />
			</Form>

			<style jsx global>{`
				.course-new .ant-steps-item-title::after {
					background: #cac9c9 !important;
				}
			`}</style>
		</div>
	);
}
