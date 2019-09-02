// const http = require('http')
// const app = require('./app')

// const port = process.env.PORT || 3000

// const server = http.createServer(app)

// server.listen(port, () => {
//   console.log(`Server listening on ${port} port`)
// })

class UsersList {
  constructor(...usersList) {
    debugger
    this._transformUsersList(usersList)
    this.id = 0
  }

  get usersList() {
    return this._usersList
  }

  get id() {
    return this._id
  }

  set usersList(usersList) {
    this._usersList = usersList
  }

  set id(id) {
    this._id = id
  }

  _transformUsersList(usersList) {
    usersList.map(user => {
      this.addUser(user)
    })
  }

  addUser(name) {
    this.id = ++this._id
    this.usersList = [...this._usersList, { id: this.id, name }]
  }
}

const user = new UsersList('My', 'Name', 'Is', 'John')
user.addUser('Perry')
console.log(user.usersList)
