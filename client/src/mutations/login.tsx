import { gql } from "@apollo/client";

export const LOGIN_TOKEN = gql`
  mutation loginToken($email: String!, $password: String!) {
    loginToken(email: $email, password: $password)
  }
`;
