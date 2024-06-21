import { gql } from "@apollo/client";

export const ADD_POST = gql`
  mutation AddPost($title: String!, $content: String!, $author: String!) {
    addPost(title: $title, content: $content, author: $author) {
      id
      title
      content
      author
    }
  }
`;

export const UPDATE_POST = gql`
  mutation UpdatePost(
    $id: Int!
    $title: String!
    $content: String!
    $author: String
  ) {
    updatePost(id: $id, title: $title, content: $content, author: $author) {
      id
      title
      content
      author
    }
  }
`;

export const DELETE_POST = gql`
  mutation DeletePost($id: Int!) {
    deletePost(id: $id)
  }
`;
