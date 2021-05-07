import SiteLayout from "../components/SiteLayout";
import { useRouter } from "next/router";
import "antd/dist/antd.css";
import "../styles/globals.css";
import LessonsLayout from "../components/LessonsLayout";

function MyApp({ Component, pageProps }) {
	const router = useRouter();

	return router.route.startsWith("/lessons/") ? (
		<LessonsLayout>
			<Component {...pageProps} />
		</LessonsLayout>
	) : (
		<SiteLayout>
			<Component {...pageProps} />
		</SiteLayout>
	);
}

export default MyApp;
