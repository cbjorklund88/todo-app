import React from "react"
import TodoItem from "./todoitem"

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      todoItems: [],
      inputText: ""
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
    this.setState({
      todoItems: currentItems
    })
  }

  updateTodoItem = (index, done) => {
    const currentItems = this.state.todoItems
    currentItems[index].done = done
    this.setState({
      todoItems: currentItems
    })
  }

  render() {
    return (
      <div className="wrapper">
        <div className="to-do-container">
          <h1> To-do list </h1>
          <form>
            <div className="input-container">
              <input type="text" onChange={this.handleInputChange} placeholder="Add item.." />
              <button type="button" onClick={this.addTodoItem}>Add</button>
            </div>
          </form>

        {this.state.todoItems.map((item, index ) => (
          <TodoItem
            text={item.text}
            key={index}
            index={index}
            done={item.done}
            updateTodoItem={this.updateTodoItem} />
        ))}
        </div>
      </div>
    )
  }

}

export default App
