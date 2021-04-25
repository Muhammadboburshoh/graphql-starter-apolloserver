const { ApolloServer } = require('apollo-server')

const resolvers = require("./src/resolvers")
const typeDefs = require("./src/typeDefs")

const PORT = process.env.PORT || 6001

const server = new ApolloServer({
  resolvers,
  typeDefs
})

server.listen(PORT, () => console.log(`localhost:${PORT}`))