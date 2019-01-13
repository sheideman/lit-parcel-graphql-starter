import {gql} from "apollo-boost";
const GET_PAGE = gql`
 query GetPage($id: String, $pageId: ID, $uri: String) {
  pageBy(id: $id, pageId: $pageId, uri: $uri) {
    id
    pageId
    uri
    __typename
    title
    slug
    header_layout
    hide_page_header
    content
    excerpt
    featuredImage {
      sourceUrl
      description
      mimeType
      mediaDetails {
        file
        height
        width
        sizes {
          sourceUrl
          height
          width
        }
      }
      mediaType
    }
  }
}
`;

export {GET_PAGE}