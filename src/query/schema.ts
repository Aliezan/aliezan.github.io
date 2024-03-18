import { gql } from "@apollo/client";

export const getBlogPosts = gql`
  query Blogs {
    blogs {
      data {
        id
        attributes {
          Picture {
            data {
              attributes {
                previewUrl
                url
                caption
              }
            }
          }
          Title
          Paragraph
          Tags
          createdAt
        }
      }
      meta {
        pagination {
          page
          pageSize
          total
          pageCount
        }
      }
    }
  }
`;
