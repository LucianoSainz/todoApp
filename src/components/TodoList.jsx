import { TodoItems } from "./TodoItems"



export const TodoList = ({todos = []}) => {

    return(
        <ul className='list-group'>
        {
          todos.map(todo => (
             <TodoItems  key={todo.id} todo={todo}/>
          ))
        }
    </ul>
   
        
    )
}