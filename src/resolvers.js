const UserModel = require('./models/users.js')

const resolvers = {

  Query: {
    users: () => UserModel.all()
  },

  Mutation: {
    createUser: (_, {name, age}) => {
      UserModel.createUser(name, age)
    }
  }
}

module.exports = resolvers