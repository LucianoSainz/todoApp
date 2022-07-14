import { TodoItems } from "./TodoItems"



export const TodoList = ({todos = [], onDeleteTodo}) => {



    return(
        <ul className='list-group'>
        {
          todos.map(todo => (
             <TodoItems  key={todo.id} todo={todo} onDeleteTodo={id => onDeleteTodo(id)}/>
          ))
        }
    </ul>
   
        
    )
}