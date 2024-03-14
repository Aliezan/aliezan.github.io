import { gql } from "@apollo/client";

export const getBlogPosts = gql`
  query Blogs {
    blogs {
      data {
        attributes {
          Paragraph
        }
      }
    }
  }
`;
