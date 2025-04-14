
export const Filter = ({filterTodo, state}) =>{
    return <div>
        <h3>Шукати за назвою</h3>
        <input onChange={e=>filterTodo(e.currentTarget.value)} type="text" name="filter" value={state}/>
         </div>
}