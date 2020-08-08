import { GraphQLServer } from "graphql-yoga";
import Mutation from "./resolvers/Mutation";
import Query from "./resolvers/Query";
import db from "./db";

//Création du serveur GraphQL Yoga
function createServer() {
	return new GraphQLServer({
		typeDefs: "src/schema.graphql",
		resolver: {
			Mutation,
			Query
		},
		resolverValidationOptions: {
			requireResolversForResolveType: false
		};
		context: req => ({...req, db})
	});
}

module.export = createServer;