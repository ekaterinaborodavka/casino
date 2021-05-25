import { gql } from "@apollo/client";

export const SIGNUP = gql`
  mutation Signup($email: String!, $password: String!, $confirmPassword: String!) {
    signup(email: $email, password: $password, confirmPassword: $confirmPassword)
  }
`;
