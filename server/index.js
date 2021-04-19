const { ApolloServer, gql } = require("apollo-server");

const login = {
  email: "user@example.com",
  password: "123456",
};

const typeDefs = gql`
  type Login {
    email: String
    password: String
  }

  type Query {
    getLogin: Login
  }
`;

const resolvers = {
  Query: {
    getLogin: () => login,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });
server.listen().then(({url}) => {
  console.log(`🚀  Server ready at ${url}`);
});
