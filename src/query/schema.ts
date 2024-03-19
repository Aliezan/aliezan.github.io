import { gql } from "@/__generated__/gql";

export const getBlogPosts = gql(`
  query Blogs($page: Int) {
    blogs(sort: "createdAt:desc" pagination: { page: $page, pageSize: 5 }) {
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
`);
