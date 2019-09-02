export default class TodoList {
  constructor(...todos) {
    this.id = 0
    this.todos = todos
  }

  get todos() {
    return this._todos
  }

  get id() {
    return this._id
  }

  set todos(todos) {
    if (!todos) {
      console.log('todos is not defined')
      return
    }
    this._todos = [...todos]
  }

  set id(id) {
    if (!id) {
      console.log('id is not defined')
      return
    }
    this._id = id
  }

  addTodo(title) {
    console.log(id)
    this.id = ++this.id
    return (this.todos = [...this.todos, { id: this._id, title }])
  }

  removeTodo(id) {
    return this.todos
  }
}
