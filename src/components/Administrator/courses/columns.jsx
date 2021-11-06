import React from "react";
import Link from "next/link";
import { Space } from "antd";

export const Thumbnail = (path, record) => (
	<div>
		<img
			src={path}
			alt={record.title}
			style={{ height: 50, objectFit: "cover" }}
		/>
	</div>
);

export const Title = (text, records) => (
	<Link href={"courses/" + records.slug}>
		<a>{text}</a>
	</Link>
);

export const Action = ({ id, record, handleDelete }) => (
	<Space size="middle">
		<Link href={"/admin/courses/" + record.slug}>
			<a>Edit</a>
		</Link>
		<button onClick={() => handleDelete(id)}>Delete</button>
	</Space>
);
