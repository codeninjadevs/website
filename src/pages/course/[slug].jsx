import { Collapse, List, Skeleton } from "antd";
import Link from "next/link";
import React from "react";
import { getCourseBySlug } from "../api/courses/[slug]";

const { Panel } = Collapse;

export default function CourseDetail({ course }) {
	return (
		<div className="course-detail-page">
			<section
				className="h-72 py-10"
				style={{
					backgroundColor: course?.themeColor ?? "#60a5fa",
				}}
			>
				<div className="container">
					<div className="w-8/12 text-white">
						{course ? (
							<>
								<h2 className="font-semibold text-4xl text-white">
									{course.title}
								</h2>
								<p className="mt-4">{course.description}</p>
							</>
						) : (
							<Skeleton />
						)}
					</div>
				</div>
			</section>
			<section className="py-8">
				<div className="container">
					<div className="grid grid-cols-12 gap-10">
						<div className="col-span-8">
							{course ? (
								<Collapse
									defaultActiveKey={[
										...Array(course.modules.length + 1).keys(),
									]}
									onChange={() => {}}
								>
									{course.modules.map((module, idx) => (
										<Panel header={module.title} key={idx + 1}>
											<List
												size="small"
												dataSource={module.lessons}
												renderItem={(lesson) => (
													<List.Item>
														<div className="flex items-center">
															<span className="mr-2 text-lg">
																{lesson.type === "video" ? (
																	<i className="fas fa-play-circle"></i>
																) : (
																	<i className="far fa-file-alt ml-0.5"></i>
																)}
															</span>
															{lesson.title}
														</div>
													</List.Item>
												)}
											/>
										</Panel>
									))}
								</Collapse>
							) : (
								<Skeleton />
							)}
						</div>
						<div className="col-span-4 relative">
							<div className="absolute -top-36 w-full">
								{course.status === "published" ? (
									<Link href={"/lessons/" + course?.slug}>
										<a className="w-full block text-center py-3 font-semibold bg-white rounded-sm focus:outline-none">
											কোর্সটি শুরু করুন
										</a>
									</Link>
								) : null}
								<div className="p-5 mt-5 bg-white rounded-sm shadow">
									<h3 className="font-semibold text-xl">
										এই কোর্স থেকে যা শিখতে পারবেন
									</h3>
									{course ? (
										<ul key={course._id} className="list-disc ml-6 mt-2">
											{course.outcomes?.map((outcome, idx) => (
												<li key={idx}>{outcome}</li>
											))}
										</ul>
									) : (
										<Skeleton title={false} className="mt-6" />
									)}
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

export async function getServerSideProps({ query }) {
	const course = await getCourseBySlug(query.slug);
	return { props: { course: JSON.parse(JSON.stringify(course)) } };
}
