import App from "next/app" ;
import Page from "../components/page";
import { createGlobalStyle } from "styled-components"

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

class monApp extends App {
	render() {
		const { Component, pageProps } = this.props;
		return (
			<Page>
				<Component {...pageProps} />
			</Page>
		)
	}
}

export default monApp;