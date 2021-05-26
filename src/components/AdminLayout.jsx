import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { useSession, signOut } from "next-auth/client";
import { Layout, Menu } from "antd";
import {
	DesktopOutlined,
	PieChartOutlined,
	SettingOutlined,
} from "@ant-design/icons";
import withCustomAuth from "./withCustomAuth";

const { Header, Content, Sider } = Layout;

function AdminLayout({ children }) {
	const [isCollapsed, setIsCollapsed] = useState(false);
	const [session, loading] = useSession();

	const handleLogout = () => {
		if (session) {
			signOut();
		}
	};

	return (
		<div className="admin">
			<Head>
				<title>Admin Panel - Shakil Ahmed</title>
			</Head>
			<Layout style={{ minHeight: "100vh" }}>
				<Header className="header" style={{ padding: "0px 23px" }}>
					<div className="logo">
						<img
							src={`/img/${isCollapsed ? "logo-sm.png" : "sa-logo-white.png"}`}
							alt="Brand Logo"
						/>
					</div>
					<Menu theme="dark" mode="horizontal" style={{ textAlign: "right" }}>
						<Menu.Item key="2">Account</Menu.Item>
						<Menu.Item key="3" onClick={handleLogout}>
							Logout
						</Menu.Item>
					</Menu>
				</Header>
				<Layout>
					<Sider
						collapsible
						collapsed={isCollapsed}
						onCollapse={setIsCollapsed}
						width={200}
						className="site-layout-background"
					>
						<Menu
							// theme="dark"
							mode="inline"
							defaultSelectedKeys={["1"]}
							defaultOpenKeys={["sub1"]}
							style={{ height: "100%", borderRight: 0 }}
						>
							<Menu.Item key="1" icon={<PieChartOutlined />}>
								<Link href="/admin">
									<a>Dashboard</a>
								</Link>
							</Menu.Item>
							<Menu.Item key="2" icon={<DesktopOutlined />}>
								<Link href="/admin/courses">
									<a>Courses</a>
								</Link>
							</Menu.Item>
							<Menu.Item key="9" icon={<SettingOutlined />}>
								<Link href="/admin/settings">
									<a>Settings</a>
								</Link>
							</Menu.Item>
						</Menu>
					</Sider>
					<Layout style={{ padding: "0 24px 24px" }}>
						<Content
							className="site-layout-background"
							style={{
								padding: 24,
								margin: 0,
								minHeight: 280,
							}}
						>
							{children}
						</Content>
					</Layout>
				</Layout>
			</Layout>
			<style jsx>{`
				.logo {
					float: left;
					width: 150px;
					height: 31px;
					margin: 16px 24px 16px 0;
				}

				.logo img {
					width: auto;
					height: 31px;
				}

				.ant-row-rtl .logo {
					float: right;
					margin: 16px 0 16px 24px;
				}

				.site-layout-background {
					background: #fff;
				}
			`}</style>
			<style>{`
				.ant-layout-sider-trigger {
					border-top: 1px solid #f1f1f1;
					background: #fff;
					color: #002140;
				}
			`}</style>
		</div>
	);
}

export default withCustomAuth(AdminLayout, {
	permittedRoles: ["admin", "superadmin"],
});
