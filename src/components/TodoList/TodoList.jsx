import { ListItem, TodoCheck, TodoText, DelButton } from "./TodoList.styled"


export const TodoList = ({todos, onDelete, toggleComplete}) =>{
    return <ul>
        {todos && todos.map((todo)=>{
            return <ListItem key={todo.id}>
            <TodoCheck htmlFor="">
                <input type="checkbox" checked={todo.completed} onChange={()=>{toggleComplete(todo.id)}}/>
            </TodoCheck>
             <TodoText>{todo.text}</TodoText>
             <DelButton type="button" onClick={()=>{onDelete(todo.id)}}>Delete</DelButton>   
            </ListItem>
        })}
    </ul>

}