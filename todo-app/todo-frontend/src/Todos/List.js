import React from 'react'

import Todo from './Todo' // 12.14


const TodoList = ({ todos, deleteTodo, completeTodo }) => { // 12.14

  return (
    <>
      {todos.map((todo, i) => (
          <Todo key={i} todo={todo} deleteTodo={deleteTodo} completeTodo={completeTodo} /> // 12.14
      )).reduce((all, current) => [...all, <hr />, current], []) // add a <hr /> between each todo
      }
    </>
  )
}





export default TodoList
