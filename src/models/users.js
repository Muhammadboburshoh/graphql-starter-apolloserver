const users = [
  { id: 1, name: 'Abdulloh', age: 20},
  { id: 2, name: 'Abdurahmon', age: 19},
  { id: 3, name: 'Muhammad', age: 26},
  { id: 4, name: 'Ibrohim', age: 21},
]

const all = () => users

const createUser = (name, age) => {
  let newUser = {
    id : users[users.length - 1].id + 1,
    name: name,
    age: age
  }

  users.push(newUser)

  return newUser
}

module.exports.all = all
module.exports.createUser = createUser