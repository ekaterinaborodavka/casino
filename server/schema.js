const { gql } = require("apollo-server");

const typeDefs = gql`
  type Login {
    email: String!
    password: String!
  }

  type Query {
    login: Login
  }

  type Mutation {
    loginToken(email: String!, password: String!): String!
    signupToken(email: String!, password: String!, confirmPassword: String!): String!
  }
`;

module.exports = typeDefs;
