import './App.css'
import { TodoList } from './components/TodoList'
import { TodoAdd } from './components/TodoAdd'
import { useTodos} from './hooks/useTodos';



export const TodoApp = () => {

  const { todos, todosCount, pendingTodosCount, handleDeleteTodo, handleToggleTodo, handleNewTodo} = useTodos();
  
  return (
    <>
    <h1 className='text-center bg-dark bg-gradient p-5'>{todosCount} - <small>pending: {pendingTodosCount}</small></h1>
    <hr />
    
    <div className='row'>
      <div className='col-7'>
        <TodoList  todos = {todos}
         onDeleteTodo = {handleDeleteTodo}
         onToggleTodo = {handleToggleTodo}
         />
      </div>


      <div className='col-5'>
        <h4>Add TODO</h4>
        <hr />
        <TodoAdd  onNewTodo = {handleNewTodo}/>
      </div>
    </div>
   
    </>
  )
}
