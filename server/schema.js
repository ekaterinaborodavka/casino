const { gql } = require("apollo-server");

const typeDefs = gql`
  type User {
    id: ID,
    name: String
    img: String
  }

  type Room {
    id: ID
    numberOfUsers: Int
    bid: Int
    date: Int
    users: [User]
  }

  type Query {
    getRooms: [Room]
    getUsers: [User]
    getOneRoom(id: ID): Room
  }

  type Mutation {
    login(email: String!, password: String!): String!
    signup(email: String!, password: String!, confirmPassword: String!): String!
  }
`;

module.exports = typeDefs;
