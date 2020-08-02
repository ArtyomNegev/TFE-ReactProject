import Navbar from "./Navbar";

const Header = () => (
	<div>
		{/* NavBar */}
		<div className="navbar">
			<a href="">Mon site</a>
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