import { createModule } from "graphql-modules";
import { DateResolver, DateTypeDefinition } from "graphql-scalars";
import { parse } from "graphql";
import { ScalarsModule } from "./generated-types/module-types";

const resolvers: ScalarsModule.Resolvers = { Date: DateResolver };

export const scalarsModule = createModule({
  id: "scalars",
  dirname: __dirname,
  typeDefs: [parse(DateTypeDefinition)],
  resolvers,
});
