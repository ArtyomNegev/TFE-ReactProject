import React, { Component } from "react";
import Header from "./Header";
import Meta from "./Meta";
import styled, { ThemeProvider, createGlobalStyle} from "styled-components"

const GlobalStyle = createGlobalStyle`
	@font-face {
		font-family: "robotoregular";
		src: url("/static/roboto-regular.webfont.woff2") format ("woff2");
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

const theme = {
	primary: "#09b5a6",
	second: "#ebebeb",
	text: "#494949",
	textWhite: "white",
	maxWidth: "1200px",
	boxS: "0 10px 20px 0 rgba(0, 0, 0, 0.08)",
	font: "robotoregular"
};

const StyledPage = styled.div`
	color: ${props => props.theme.text}; 
`;

const StyledPageContent = styled.div`
	max-width: ${props => props.theme.maxWidth};
	margin: 0 auto;
	padding: 1.5rem; 
`;

class Page extends Component {
	render() {
		return (
			<ThemeProvider theme={theme}>
				<StyledPage>
					<Meta />
					<Header />
					<StyledPageContent>
						{ this.props.children }
					</StyledPageContent>
				</StyledPage>
			</ThemeProvider>
		)
	}
}

export default Page