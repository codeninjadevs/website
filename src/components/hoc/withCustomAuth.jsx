import React from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/client";
import { Spin } from "antd";
import { outlinedSpinner } from "../lib/Spinners";

const withCustomAuth =
	(Component, { permittedRoles }) =>
	(props) => {
		const [session, loading] = useSession();
		const router = useRouter();

		if (loading) {
			return (
				<div
					className="flex items-center justify-center"
					style={{ height: "calc(100vh - 100px)" }}
				>
					<Spin indicator={outlinedSpinner} />
				</div>
			);
		} else if (!session) {
			router.push(`/login/?callbackUrl=${window.location.href}`);
			return <div />;
		} else if (permittedRoles.includes(session.user.role)) {
			return <Component {...props} />;
		} else {
			router.push("/");
			return <div />;
		}
	};

export default withCustomAuth;
