import React from "react";
import Link from "next/link"

const home = props => (
	<div>
		<p> Home </p>
		<Link href="/creation">
			<a>Creation</a>
		</Link>
	</div>
)

export default home