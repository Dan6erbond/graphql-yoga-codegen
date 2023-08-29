import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "./src/modules/**/typedefs/*.graphql",
  generates: {
    "./src/modules/": {
      config: {
        contextType: "GraphQLModules.Context",
      },
      preset: "graphql-modules",
      presetConfig: {
        baseTypesPath: "./generated-types/graphql.ts",
        filename: "generated-types/module-types.ts",
        importBaseTypesFrom: "@graphql/types",
      },
      plugins: [
        {
          add: {
            content: "/* eslint-disable */",
          },
        },
        "typescript",
        "typescript-resolvers",
      ],
    },
  },
};

export default config;
