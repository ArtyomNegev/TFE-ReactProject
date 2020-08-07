import Navbar from "./Navbar";
import styled from "styled-components";
import Link from "next/link";
import Router from "next/router";
import NProgress from "nprogress";

Router.onRouteChangeStart = () => {
	NProgress.start();
}
Router.onRouteChangeComplete = () => {
	NProgress.done();
}
Router.onRouteChangeError = () => {
	console.log("Erreur lors du chargement de la page");
	NProgress.done();
}

const StyledHeader= styled.header`
	.navbar {
		/* GRID */
		display: grid;
		grid-template-columns: auto 1fr;
		justify-content: space-between;
		align-items: stretch;
		/* Autres Propriétés */
		border-bottom: 2px solid ${props => props.theme.text};
		@media (maxwidth: 1200px) {$
			grid-template-columns: 1fr;
			justify-content: center;
		}
	}
	.sub-navbar {
		/* GRID */
		display: grid;
		grid-template-columns: auto 1fr;
		/* Autres Propriétés */
		border-bottom: 1px solid ${props => props.theme.second};
	}
`;

const StyledTitle = styled.h1`
	font-size: 2rem;
	margin-left: 1.5rem;
	position: relative;
	transform: skew(-6deg);
	z-index: 2;
	a {
		padding: 0.3rem 0.6rem;
		background: ${props => props.theme.primary};
		text-transform: uppercase;
		color: ${props => props.theme.textWhite};
		text-decoration: none;
	}
	@media (max-width: 1200px) {
		text-align: center;
		margin: 0;
	}
`;

const Header = () => (
	<StyledHeader>
		{/* NavBar */}
		<div className="navbar">
			<StyledTitle>
				<Link href="/">
					<a>Diététicienne Anne Chauvaux</a>
				</Link>
			</StyledTitle>
			<Navbar />
		</div>
		{/* Sous menu*/}
		<div className="sub-navbar">
			<p> Rechercher </p>
		</div>
		{/* Panier*/}
		<div>
			Mon panier
		</div>
	</StyledHeader>
)

export default Header