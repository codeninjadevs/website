import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Collapse, List, Tabs } from "antd";
import { CaretRightOutlined } from "@ant-design/icons";
import NavbarLessons from "../../components/NavbarLessons";
import EmbedYoutube from "../../components/EmbedYoutube";
import accordionData from "../../data/accordionData";

const { Panel } = Collapse;
const { TabPane } = Tabs;

export default function Lessons() {
	const [course, setCourse] = useState({});
	const router = useRouter();
	const { slug } = router.query;

	return (
		<div className="lessons-page">
			<NavbarLessons />
			<div className="grid grid-cols-11 gap-5 px-5" style={{ paddingTop: 85 }}>
				<div className="col-span-8">
					<div className="overflow-hidden">
						<EmbedYoutube embedId="W6NZfCO5SIk" />
					</div>
				</div>
				<div className="col-span-3 border border-solid border-gray-200 course-content">
					<div className="shadow-sm bg-gray-50 px-4 pt-4 pb-3">
						<h2 className="font-semibold text-xl">কোর্স কনটেন্ট</h2>
					</div>
					<Collapse
						bordered={false}
						defaultActiveKey={["1"]}
						expandIcon={({ isActive }) => (
							<CaretRightOutlined rotate={isActive ? 90 : 0} />
						)}
						className="site-collapse-custom-collapse"
					>
						{accordionData.map((item, idx) => (
							<Panel header={item.header} key={idx + 1}>
								<List
									size="small"
									dataSource={item.contents}
									renderItem={(item) => (
										<List.Item style={{ paddingLeft: 6 }}>
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
							</Panel>
						))}
					</Collapse>
				</div>
			</div>
			<div className="grid grid-cols-11 gap-5 px-5 pt-5 pb-32">
				<div className="col-span-8">
					<Tabs
						defaultActiveKey="overview"
						tabBarStyle={{ color: "black" }}
						onChange={() => {}}
					>
						<TabPane tab="এক নজরে" key="overview">
							এটা ওভারভিউ এরিয়া
						</TabPane>
						<TabPane tab="টীকা" key="notes">
							এটা টীকা এরিয়া। এখানো টীকা লিখতে পারবেন
						</TabPane>
						<TabPane tab="আলোচনা" key="discussion">
							এটা আলোচনা করার এরিয়া। এখানে প্রশ্ন জিজ্ঞেস করতে পারবেন
						</TabPane>
					</Tabs>
				</div>
			</div>
			<style>{`
				nav.primary {
					display: none;
				}

				.lessons-page [data-theme='compact'] .site-collapse-custom-collapse .site-collapse-custom-panel,
				.site-collapse-custom-collapse .site-collapse-custom-panel {
					overflow: hidden;
					background: white;
					border: 0px;
					border-radius: 2px;
				}

				.lessons-page .ant-collapse-item {
					background: white !important;
				}
				
				.lessons-page .ant-tabs-tab-btn {
					color: black !important;
				}
				
				.lessons-page .ant-tabs-tab-btn:hover {
					color: black !important;
				}
				
				.lessons-page .ant-tabs-ink-bar {
					background: black !important;
				}
			`}</style>

			<style jsx>{`
				.course-content {
					height: calc(100vh - 160px);
					overflow: auto;
				}
			`}</style>
		</div>
	);
}
