import { createModule } from "graphql-modules";
import { UserModule } from "./generated-types/module-types";
import UserTypes from "./typedefs/user.graphql";

const resolvers: UserModule.Resolvers = {
  Query: {
    user: async (_parent, _args, _context, _info) => {
      return {
        id: "",
        birthday: new Date(),
      };
    },
  },
};

export const userModule = createModule({
  id: "user",
  dirname: __dirname,
  typeDefs: [UserTypes],
  resolvers,
});
