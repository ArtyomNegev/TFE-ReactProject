import React, { Component } from "react";
import Header from "./Header";
import Meta from "./Meta";
import styled, { ThemeProvider, injectGlobal} from "styled-components"

const theme = {
	primary: "#673Ab7",
	second: "#ebebeb",
	text: "#494949",
	textWhite: "white",
	maxWidth: "1200px",
	boxS: "0 10px 20px 0 rgba(0, 0, 0, 0.08)"
};

const StyledPage = styled.div`
	background: ${props => props.theme.second}; 
	color: ${props => props.theme.text}; 
`;

const StyledPageContent = styled.div`
	background: ${props => props.theme.primary}; 
	max-width: ${props => props.theme.maxWidth};
	margin: 0 auto;
	padding: 1.5rem; 
`;

class Page extends Component {
	render() {
		return (
			<StyledPage>
				<Meta />
				<Header />
				<StyledPageContent>
					{ this.props.children }
				</StyledPageContent>
			</StyledPage>
		)
	}
}

export default Page