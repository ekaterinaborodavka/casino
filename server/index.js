const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema");

const login = {
  email: "user@example.com",
  password: "123456",
};
const token = "ZGFpc3lAYXBvbGxvZ3JhcGhxbC5jb20=";

const resolvers = {
  Query: {
    login: () => {
      return login;
    },
  },
  Mutation: {
    loginToken: (prev, { email, password }) => {
      if (email === login.email && password === login.password) {
        return token;
      }
      throw new Error("Invalid password or email");
    },
    signupToken: (prev, { email, password }) => {
      if (email !== login.email && password) {
        return token;
      }
      throw new Error("Invalid password or email");
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
