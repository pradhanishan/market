import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { PrismaClient } from "@prisma/client";
import { typeDefs } from "./schema.js";
import * as dotenv from "dotenv";
import { Query } from "./resolvers/queries/index.js";
import { Mutation } from "./resolvers/mutations/index.js";

dotenv.config();

const prisma = new PrismaClient();

const resolvers = {
  Query,
  Mutation,
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  context: async ({ req, res }) => ({
    prisma,
  }),

  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
