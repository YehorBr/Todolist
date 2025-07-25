import { Component, useState } from "react";
import { AddButton } from "./TodoEditor.styled";

export const TodoEditor = ({addTodo, handleCloseModal})=>{
    const [textValue, setTextValue] = useState('')

    const handleChange = (e) =>{
        setTextValue(e.currentTarget.value)
    }

    const handleSubmit = (e)=>{
        e.preventDefault()

        addTodo(textValue)

        handleCloseModal()

        e.currentTarget.reset()
    }

    return<>
        <form action="" onSubmit={handleSubmit}>
            <label htmlFor="">
                <textarea name="edit" id="" value={textValue} onChange={handleChange}></textarea>
            </label>
            <br />
            <AddButton>Додати</AddButton>
        </form>
        

        </>

}