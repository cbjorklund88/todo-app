import React from "react"
import TodoItem from "./todoitem"

class App extends React.Component {

  constructor(props) {
    super(props)
    if (localStorage.getItem("userTodoItems")) {
      this.state = {
        todoItems: JSON.parse(localStorage.getItem("userTodoItems"))
      }
    } else {
      this.state = {
        todoItems: [],
        inputText: ""
      }
    }
  }

  handleInputChange = (e) => {
    this.setState({
      inputText: e.target.value
    })
  }

  addTodoItem = () => {
    const currentItems = this.state.todoItems
    const item = { text: this.state.inputText, done: false }
    currentItems.push(item)
    localStorage.setItem("userTodoItems", JSON.stringify(currentItems))
    this.setState({
      todoItems: currentItems
    })
  }

  updateTodoItem = (index, done) => {
    const currentItems = this.state.todoItems
    currentItems[index].done = done
    localStorage.setItem("userTodoItems", JSON.stringify(currentItems))
    this.setState({
      todoItems: currentItems
    })
  }

  handleRemove = (index) => {
    const currentItems = this.state.todoItems
    currentItems.splice(index, 1)
    this.setState({
      todoItems: currentItems
    })
    localStorage.setItem("userTodoItems", JSON.stringify(currentItems))
  }

  render() {
    return (
      <div className="wrapper">
        <div className="todo-container">
          <h1> Things to do </h1>
          <form>
            <div className="input-container">
              <input type="text" onChange={this.handleInputChange} placeholder="Add item.." />
              <button type="button" className="submit" onClick={this.addTodoItem}>Add</button>
            </div>
            {this.state.todoItems.map((item, index ) => (
              <TodoItem
                text={item.text}
                key={index}
                index={index}
                done={item.done}
                updateTodoItem={this.updateTodoItem}
                removeTodo={this.handleRemove} />
            ))}
          </form>
        </div>
      </div>
    )
  }

}

export default App
