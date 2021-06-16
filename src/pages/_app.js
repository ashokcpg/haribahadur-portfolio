import Theme from "../styles/theme";
// import Head from "next/document";

export default function App({ Component, pageProps }) {
	return (
		<>
			<title>Hari Bahadur's Portfolio | Hari Bahadur's Website</title>
			<Theme>
				<Component {...pageProps} />
			</Theme>
		</>
	);
}
