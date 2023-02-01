export const typeDefs = `#graphql

  type Query {
    test: String!
  }

  type Mutation{
    register(registerInput:RegisterInput!):AuthPayload!
    login(loginInput:LoginInput!):AuthPayload!
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
