import express from "express";
import { ApolloServer } from 'apollo-server-express';
import { userTypeDef } from './schema/typeDefs/user.type.js';
import { userResolver } from './schema/resolvers/user.resolver.js';
import { connectDB, sequelize } from "./config/db.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();

const server = new ApolloServer({
    typeDefs: [userTypeDef],
    resolvers: [userResolver],
});

await server.start();
server.applyMiddleware({ app });

const PORT = process.env.PORT || 4000;

connectDB();

await sequelize.sync({ alter: true });

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}${server.graphqlPath}`);
});