//Pour des raisons obscures (çà ne fonctionnait pas) j'ai décidé de le mettre directement dans _app.js
import withApollo from "next-with-apollo";
import ApolloClient from "apollo-boost";
import { endpoint} from "../config";

function createClient({component}){
	return new ApolloClient({
		uri: process.env.NODE_ENV === "development" ? endpoint : endpoint,
		request: operation => {
			operation.setContext({
				fetchOptions: {
					credentials: "include",
				},
				component
			});
		},
	});
}

export default withApollo(createClient);