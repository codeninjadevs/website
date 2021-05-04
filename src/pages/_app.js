import SiteLayout from "../components/SiteLayout";
import "antd/dist/antd.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
	return (
		<SiteLayout>
			<Component {...pageProps} />
		</SiteLayout>
	);
}

export default MyApp;
