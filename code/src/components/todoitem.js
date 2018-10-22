import React from "react"

class TodoItem extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      done: false
    }
  }
  handleChange = () => {
    const index = this.props.index
    const done = !this.state.done
    this.props.updateTodoItem (index, done)
    this.setState({
      done: !this.state.done
    })
  }
  handleRemoveTodo = (e) => {
    e.preventDefault()
    this.props.removeTodo(this.props.index)
  }

  render() {
    return (
      <div className="added-item-container">
        <button onClick={this.handleRemoveTodo} className="remove-button"><i className="fa fa-close" /></button>
        <input
          className="input"
          type="checkbox"
          checked={this.props.done}
          onChange={this.handleChange} />
        {this.props.text}
      </div>
    )
  }

}

export default TodoItem
