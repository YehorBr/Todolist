import styled from "styled-components";

export const ListItem = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 500px;

    text-align: center;

    background-color: #fff;

    border: 1px solid black;

    padding: 20px 0;

    &:not(:first-child){
        margin-top: 5px;
    }
`
export const TodoCheck = styled.label`
    margin-right: auto;
`

export const TodoText = styled.p`
    
    margin-right: 100px;
`

export const DelButton = styled.button`
    color: #fff;
    background-color: #4db560;

    padding: 10px 50px;
    margin-right: 20px;

    border: none;
    border-radius: 5px;
`