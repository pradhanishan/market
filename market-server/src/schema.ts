export const typeDefs = `#graphql

  type Query {
    test: String!
  }

  input RegisterInput{
    username:String!
    email:String!
    password:String!
    confirmPassword:String!
  }

  input LoginInput{
    username:String!
    password:String!
  }

  type AuthPayload{
    accessToken:String
  }

`;
