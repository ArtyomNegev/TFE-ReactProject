import App from "next/app" ;
import Page from "../components/page";
import { createGlobalStyle } from "styled-components";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { endpoint} from "../config";


const GlobalStyle = createGlobalStyle`
	@font-face {
		font-family: "robotoregular";
		src: url("..\static\roboto-regular-webfont.woff2") format ("woff2");
		font-weight: normal;
		font-style: normal;
	}
	html {
		font-family: "robotoregular";
		box-sizing: border-box;
		font-size: 10px; /* Forcer la taille par defaut */
	}
	*, *:before, *:after {
		box-sizing: inherit;
	}
	body {
		padding: 0;
		margin: 0;
		font-size: 1.5rem;
		line-height: 1.5;
	}
	a {
		text-decoration: none;
		color: ${props => props.theme.text};
	}
`;

const client = new ApolloClient({
	uri: process.env.NODE_ENV === "development" ? endpoint : endpoint,
	request: operation => {
		operation.setContext({
			fetchOptions: {
				credentials: "include",
			},
			component
		});
	}
})
class monApp extends App {
	static async getInitialProps({ Component, ctx }) {
		let pageProps = {}
		if (Component.getInitialProps) {
			pageProps = await Component.getInitialProps(ctx)
		}
		return { pageProps }
	}
	render() {
		const { Component, pageProps } = this.props;
		return (
			<ApolloProvider client={client}>
				<Page>
					<Component {...pageProps} />
				</Page>
			</ApolloProvider>
		)
	}
}

export default monApp;