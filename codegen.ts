import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema:
    process.env.NODE_ENV === "development"
      ? "http://localhost:1337/graphql"
      : process.env.STRAPI_URL_GRAPHQL,
  documents: "src/query/schema.ts",
  generates: {
    "./src/__generated__/": {
      preset: "client",
      plugins: [],
      presetConfig: {
        gqlTagName: "gql",
      },
    },
  },
};

export default config;
