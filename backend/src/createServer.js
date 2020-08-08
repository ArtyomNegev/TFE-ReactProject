import GraphQLServer from "graphql-yoga";
import Mutation from "/TFE/Local/backend/src/resolvers/Mutation.js"; //obliger car bug sinon, continuer à chercher une alt
import Query from "/TFE/Local/backend/src/resolvers/Query.js";
import db from "/TFE/Local/backend/src/db.js";

//Création du serveur GraphQL Yoga
function createServer() {
	return new GraphQLServer({
		typeDefs: "src/schema.graphql",
		resolvers: {
			Mutation,
			Query
		},
		resolverValidationOptions: {
			requireResolversForResolveType: false
		},
		context: req => ({...req, db})
	});
}

export default createServer();