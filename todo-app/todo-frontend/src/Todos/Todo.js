const Todo = ({ todo, deleteTodo, completeTodo }) => { // 12.14

  const { text, done } = todo // destructuring

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', maxWidth: '70%', margin: 'auto' }} >
      <span>
        {text} 
      </span>
      <span>
        {done ? 'This todo is done' : 'This todo is not done'}
      </span>
      <span>
        <button onClick={() => deleteTodo(todo)} > Delete </button>
        {!done && <button onClick={() => completeTodo(todo)} > Set as done </button>}
      </span>
    </div>
  )

}


export default Todo