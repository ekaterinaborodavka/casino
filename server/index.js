const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema");

const login = {
  email: "user@example.com",
  password: "123456",
};

const resolvers = {
  Query: {
    getLogin: () => login,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });
server.listen().then(({url}) => {
  console.log(`🚀  Server ready at ${url}`);
});
