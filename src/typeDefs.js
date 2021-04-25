const { gql } = require('apollo-server')

const typeDefs = gql`

  type Query {
    users: [User!]!
  }

  type Mutation {
    createUser(name: String! age: Int!): User
  }

  type User {
    id: Int!
    name: String!
    age: Int!
  }
`

module.exports = typeDefs