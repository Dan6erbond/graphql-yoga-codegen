import "graphql-import-node";
import "reflect-metadata";

import { useApolloTracing } from "@envelop/apollo-tracing";
import { useGraphQLMiddleware } from "@envelop/graphql-middleware";
import { useGraphQLModules } from "@envelop/graphql-modules";
import { createApplication } from "graphql-modules";
import { shield } from "graphql-shield";
import { createYoga, useLogger } from "graphql-yoga";
import { createServer } from "node:http";
import { Data } from "./data";
import { scalarsModule } from "./modules/scalars/module";
import { userModule } from "./modules/user/module";

// This is your application, it contains your GraphQL schema and the implementation of it.
const application = createApplication({
  modules: [userModule, scalarsModule],
  providers: [Data],
});

const permissions = shield({});

const yoga = createYoga({
  plugins: [
    useGraphQLModules(application),
    useLogger(),
    useApolloTracing(),
    useGraphQLMiddleware([permissions]),
  ],
});

const server = createServer(yoga);

// Start the server and you're done!
server.listen(4000, () => {
  console.info("Server is running on http://localhost:4000/graphql");
});
