import { useEffect, useReducer } from 'react'
import { todoReducer } from './todoReducer'
import './App.css'
import { TodoList } from './components/TodoList'
import { TodoAdd } from './components/TodoAdd'


const initialState = [
  
]
   
const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || [];
}


export const TodoApp = () => {

 const [todos, dispatch] = useReducer(todoReducer, initialState, init)

 useEffect(() => {
      localStorage.setItem('todos', JSON.stringify(todos))
 }, [todos])

 const handleNewTodo = (todo) => {
  const action = {
    type: '[TODO] Add Todo',
    payload: todo
  }

  dispatch(action);

 }
 
  return (
    <>
    <h1 className='text-center bg-dark bg-gradient p-5'>TodoApp: 10  - <small>pending: 2</small></h1>
    <hr />
    
    <div className='row'>
      <div className='col-7'>
        <TodoList  todos = {todos}/>
      </div>


      <div className='col-5'>
        <h4>Add TODO</h4>
        <hr />
        <TodoAdd  onNewTodo={handleNewTodo}/>
      </div>
    </div>
   
    </>
  )
}
