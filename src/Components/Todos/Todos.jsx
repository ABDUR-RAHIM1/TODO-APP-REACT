import React from 'react'
import Todo from '../Todo/Todo'
import "./Todos.css"

function Todos(props) {
    const {todo} = props 
  return (
    <div className='todos'>
       {
         todo.length > 0 ?  ( 
             todo.map( todo =>  <Todo 
            todo={todo}
            key={todo.id}
            handleDelete={props.handleDelete}
            />)) : <h2 className='text-center mt-3 text-danger'>Nothing found</h2>
       }
    </div>
  )
}

export default Todos