import SiteLayout from "../components/SiteLayout";
// import "tailwindcss/tailwind.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
	return (
		<SiteLayout>
			<Component {...pageProps} />
		</SiteLayout>
	);
}

export default MyApp;
