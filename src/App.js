import {Component} from 'react'
import TodoItem from './TodoItem'

import './App.css'

class App extends Component {
  state = {userInput: '', todosList: []}

  componentDidMount() {
    this.AllTodos()
  }

  AllTodos = async () => {
    const url = 'https://todos-backend-production-69a3.up.railway.app/todos'

    const options = {
      method: 'GET',
    }

    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)

    if (response.ok === true) {
      this.setState({todosList: data})
    }
  }

  addTodoButton = () => {
    const {todosList, userInput} = this.state

    const todoLength = todosList.length

    const newList = {
      id: todoLength + 1,
      todo: userInput,
    }

    this.setState(prevState => ({
      todosList: [...prevState.todosList, newList],
      userInput: '',
    }))
  }

  onChangeUserInput = event => {
    this.setState({userInput: event.target.value})
  }

  render() {
    const {userInput, todosList} = this.state
    console.log(todosList)

    return (
      <div className="todos-bg-container">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="todos-heading">Todos</h1>
              <h1 className="create-task-heading">
                Create <span className="create-task-heading-subpart">Task</span>
              </h1>
              <input
                value={userInput}
                type="text"
                onChange={this.onChangeUserInput}
                className="todo-user-input"
                placeholder="What needs to be done?"
              />
              <button
                type="button"
                className="button"
                onClick={this.addTodoButton}
              >
                Add
              </button>
              <h1 className="todo-items-heading">
                My <span className="todo-items-heading-subpart">Tasks</span>
              </h1>
              <ul className="todo-items-container" id="todoItemsContainer">
                {todosList.map(eachItem => (
                  <TodoItem details={eachItem} key={eachItem.id} />
                ))}
              </ul>
              <button type="button" className="button" id="saveTodoButton">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
