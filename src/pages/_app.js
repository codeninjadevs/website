import { useRouter } from "next/router";
import { Provider } from "next-auth/client";
import LoadingBar from "react-top-loading-bar";
import SiteLayout from "../components/lib/Layouts/SiteLayout";
import LessonsLayout from "../components/lib/Layouts/LessonsLayout";
import AdminLayout from "../components/lib/Layouts/AdminLayout";
import "antd/dist/antd.css";
import "../styles/globals.css";
import { useEffect, useRef, useState } from "react";

function MyApp({ Component, pageProps }) {
	const router = useRouter();
	const [progress, setProgress] = useState(0);
	const ref = useRef(null);

	useEffect(() => {
		router.events.on("routeChangeStart", startPageLoading);
		router.events.on("routeChangeComplete", stopPageLoading);
		router.events.on("routeChangeError", stopPageLoading);

		return () => {
			router.events.off("routeChangeStart", startPageLoading);
			router.events.off("routeChangeComplete", stopPageLoading);
			router.events.off("routeChangeError", stopPageLoading);
		};
	}, [router.events]);

	const startPageLoading = () => ref.current.continuousStart();
	const stopPageLoading = () => ref.current.complete();

	return (
		<Provider session={pageProps.session}>
			<LoadingBar
				ref={ref}
				color="#3a91e5"
				progress={progress}
				transitionTime={10}
				onLoaderFinished={() => setProgress(0)}
			/>
			{router.route.startsWith("/lessons/") ? (
				<LessonsLayout>
					<Component {...pageProps} />
				</LessonsLayout>
			) : router.route.startsWith("/admin") ? (
				<AdminLayout>
					<Component {...pageProps} />
				</AdminLayout>
			) : (
				<SiteLayout>
					<Component {...pageProps} />
				</SiteLayout>
			)}
		</Provider>
	);
}

export default MyApp;
