import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Collapse, List, Avatar } from "antd";
import courseData from "../../data/courses";
import accordionData from "../../data/accordionData";

const { Panel } = Collapse;

export default function CourseDetail() {
	const [course, setCourse] = useState({});
	const router = useRouter();
	const { slug } = router.query;

	useEffect(() => {
		setCourse(courseData.find((course) => course.slug === slug));
	}, []);

	return (
		<div className="course-detail-page">
			<section className="h-72 py-10 bg-blue-400">
				<div className="container">
					<div className="w-8/12 text-white">
						<h2 className="font-semibold text-4xl text-white">
							{course?.title}
						</h2>
						<p className="mt-4">{course?.description}</p>
					</div>
				</div>
			</section>
			<section className="py-8">
				<div className="container">
					<div className="grid grid-cols-12 gap-10">
						<div className="col-span-8">
							<Collapse defaultActiveKey={["1"]} onChange={() => {}}>
								{accordionData.map((item, idx) => (
									<Panel header={item.header} key={idx + 1}>
										<List
											size="small"
											dataSource={item.contents}
											renderItem={(item) => (
												<List.Item>
													<div className="flex items-center">
														<img
															src={
																item.type === "video"
																	? "/img/play-button.png"
																	: "/img/docs.png"
															}
															alt="video"
															className="w-4 h-4 mr-3"
														/>
														{item.title}
													</div>
												</List.Item>
											)}
										/>
									</Panel>
								))}
							</Collapse>
						</div>
						<div className="col-span-4 relative">
							<div className="absolute -top-36 w-full">
								<button className="w-full py-3 font-semibold bg-white rounded-sm focus:outline-none">
									কোর্সটি শুরু করুন
								</button>
								<div className="p-5 mt-5 bg-white rounded-sm shadow">
									<h3 className="font-semibold text-xl">
										এই কোর্স থেকে যা শিখতে পারবেন
									</h3>
									<ul className="list-disc ml-6 mt-2">
										<li>HTML ট্যাগ</li>
										<li>HTML এট্রিবিউট</li>
										<li>ছবি যুক্ত করা</li>
										<li>লাইভ সাইটে ডিপ্লয় করা</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<style>{`
				.course-detail-page .ant-list-split .ant-list-item {
					border-bottom: none !important;
				}
			`}</style>
		</div>
	);
}
