import Link from "next/link";
import StyledNavbar from "./styles/StyledNavbar";

const Navbar = () => (
	<StyledNavbar>
		<Link href="/">
			<a>Accueil</a>
		</Link>
		<Link href="/creation">
			<a>Création</a>
		</Link>
		<Link href="/articles">
			<a>Test</a>
		</Link>
		<Link href="/commandes">
			<a>Test</a>
		</Link>
		<Link href="/moncompte">
			<a>Test</a>
		</Link>
	</StyledNavbar>
)

export default Navbar