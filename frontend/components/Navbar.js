import Link from "next/link";
import StyledNavbar from "./styles/StyledNavbar";

const Navbar = () => (
	<StyledNavbar>
		<Link href="/">
			<a>Accueil</a>
		</Link>
		<Link href="/presentation">
			<a>Présentation</a>
		</Link>
		<Link href="/blog">
			<a>Blog</a>
		</Link>
		<Link href="/connexion">
			<a>Connexion</a>
		</Link>
	</StyledNavbar>
)

export default Navbar