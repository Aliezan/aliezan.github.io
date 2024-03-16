import { HttpLink } from "@apollo/client";
import {
  NextSSRInMemoryCache,
  NextSSRApolloClient,
} from "@apollo/experimental-nextjs-app-support/ssr";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc";

const STRAPI_URL = process.env.STRAPI_URL || "http://localhost:1337";
export const { getClient } = registerApolloClient(
  () =>
    new NextSSRApolloClient({
      cache: new NextSSRInMemoryCache(),
      link: new HttpLink({
        uri: `${STRAPI_URL}/graphql`,
      }),
    }),
);
