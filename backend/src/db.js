import Prisma from "prisma-binding"

const db = new new Prisma ({
	typeDefs: "src/generated/prisma.graphql",
	endpoint: process.env.PRISMA_ENDPOINT,
	secret: process.env.PRISMA_SECRET,
	debug: true
});

module.exports = db;