import '../App.css'

const TodoItem = props => {
  const {details} = props

  return (
    <li className="todo-item-container">
      <p className="label-container">{details.todo}</p>
    </li>
  )
}

export default TodoItem
