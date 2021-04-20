const { gql } = require('apollo-server');

const typeDefs = gql`
type Login {
    email: String
    password: String
  }

  type Query {
    getLogin: Login
  }
`;

module.exports = typeDefs;