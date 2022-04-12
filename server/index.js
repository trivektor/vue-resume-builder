import { ApolloServer } from "apollo-server-express";
import express from "express";
import jwt from "express-jwt";
import jwksRsa from "jwks-rsa";
import mongoose from "mongoose";

import typeDefs from "./schema";
import resolvers from "./resolvers";

require("dotenv").config({ path: `${__dirname}/../.env` });

mongoose.connect(process.env.MONGO_URL, { useUnifiedTopology: true });

const app = express();

app.use(
  jwt({
    secret: jwksRsa.expressJwtSecret({
      jwksUri: `https://${process.env.VUE_APP_AUTH0_CONFIG_DOMAIN}/.well-known/jwks.json`,
    }),
    algorithms: ["RS256"],
    getToken: function fromHeaderOrQuerystring(req) {
      let token;

      if (
        req.headers.authorization &&
        req.headers.authorization.split(" ")[0] === "Bearer"
      ) {
        token = req.headers.authorization.split(" ")[1];
      } else if (req.query && req.query.token) {
        token = req.query.token;
      }

      return token;
    },
  })
);

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req: { user } }) => ({ userId: user.sub.split("|")[1] }),
});

server.applyMiddleware({ app });

app.listen({ port: 4000 }, () => {
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
});
