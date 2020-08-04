import Navbar from "./Navbar";
import styled from "styled-components";
import Link from "next/link";

const StyledTitle = styled.h1`
	font-size: 4rem;
	margin-left: 1.5rem;
	position: relative;
	transform: skew (6deg);
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
	<div>
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
	</div>
)

export default Header