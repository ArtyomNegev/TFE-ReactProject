import Link from "next/link";

const Navbar = () => (
	<div>
		<Link href="/">
			<a> Accueil </a>
		</Link>
		<Link href="/creation">
			<a> Création </a>
		</Link>
	</div>
)

export default Navbar