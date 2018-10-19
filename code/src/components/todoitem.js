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

  render() {
    return (
      <div>
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
