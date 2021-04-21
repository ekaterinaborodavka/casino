const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema");

const login = {
  email: "user@example.com",
  password: "123456",
};
const loginToken = "ZGFpc3lAYXBvbGxvZ3JhcGhxbC5jb20=";
const SignupToken = "eyJhbGciOiJIUzUxMiIsI";

const resolvers = {
  Query: {
    login: () => {
      return login;
    },
  },
  Mutation: {
    loginToken: (prev, { email, password }) => {
      if (email === login.email && password === login.password) {
        return loginToken;
      }
      throw new Error("Invalid password or email");
    },
    signupToken: (prev, { email, password }) => {
      if (email !== login.email && password) {
        return SignupToken;
      }
      throw new Error("Invalid password or email");
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
