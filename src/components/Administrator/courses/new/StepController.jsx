import { Button } from "antd";
import React from "react";

export default function StepController({ currentStep, prev, next }) {
	return (
		<div className="text-right mt-5">
			{currentStep > 0 && (
				<Button style={{ margin: "0 8px" }} onClick={() => prev()}>
					Previous
				</Button>
			)}
			{currentStep < 3 - 1 && (
				<Button type="primary" onClick={() => next()}>
					Next
				</Button>
			)}
			{currentStep === 3 - 1 && (
				<Button type="primary" htmlType="submit">
					Done
				</Button>
			)}
		</div>
	);
}
