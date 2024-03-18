import { gql } from "@apollo/client";

export const getBlogPosts = gql`
  query Blogs {
    blogs(sort: "createdAt:desc") {
      data {
        id
        attributes {
          Picture {
            data {
              attributes {
                previewUrl
                url
                alternativeText
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
