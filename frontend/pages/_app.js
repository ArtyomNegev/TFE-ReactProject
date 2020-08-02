import App, { Container } from "next/app" ;
import Page from "../components/Page";
class monApp extends App {
	render() {
		const { Component, pageProps } = this.props;
		return (
			<Container>
				<Page>
					<Component {...pageProps} />
				</Page>
			</Container>
		)
	}
}

export default monApp