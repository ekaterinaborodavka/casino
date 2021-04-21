import { gql } from "@apollo/client";

export const SIGNUP_TOKEN = gql`
  mutation signupToken($email: String!, $password: String!, $confirmPassword: String!) {
    signupToken(email: $email, password: $password, confirmPassword: $confirmPassword)
  }
`;
