import { Modal } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";

const { confirm } = Modal;

export const handleDelete = () => {
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
};
