import {gql} from "apollo-boost";
const GET_PAGE = gql`
 query GetPage($id: ID, $pageId: Int, $uri: String) {
  pageBy(id: $id, pageId: $pageId, uri: $uri) {
    id
    pageId
    uri
    __typename
    title
    slug

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