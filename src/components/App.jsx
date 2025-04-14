import { Component } from "react";
import { GlobalStyle } from "../GlobalStyle";
import { Container } from "./Container/Container";
import { TodoList } from "./TodoList/TodoList";
import { TodoEditor } from "./TodoEditor/TodoEditor";
import { Info } from "./Info/Info";
import initialTodos from '../todo.json'
import { Filter } from "./Filter/Filter";
import { Modal } from "./Modal/Modal";
import { AddButton } from "./TodoEditor/TodoEditor.styled";


export class App extends Component {
  
  state={
    todos: initialTodos,
    showModal: false,
    filter: '',
  }

  // componentDidMount(){
  //   const todos = localStorage.getItem('todos')
  //   if (todos) {
  //     const parsedTodos = JSON.parse(todos)
  //     this.setState({todos: parsedTodos})
  //   }


  // }

  // componentDidUpdate(prevProps, prevState){

  //   if(prevState.todos !== this.state.todos){
  //       localStorage.setItem("todos", JSON.stringify(this.state.todos))
  //   }
  // }


  deleteTodo = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((todo) => todo.id !== id),
    }));
  };

  addTodo = (todoText)=>{
    const newTodo = {
      id: Date.now(),
      text: todoText,
      completed: false
    };

    this.setState((prevState)=>({
      todos: [...prevState.todos, newTodo]
    })) 
  };

  toggleComplete=(id)=>{
    this.setState((prevState)=>({
      todos: prevState.todos.map((todo)=>(todo.id === id ? {...todo, completed: !todo.completed} : todo))
    }))
    }

    filterTodo = (text) => {
      this.setState({filter: text})
    }

    handleShowModal = () => {
      this.setState((prevState)=>({
        showModal: !prevState.showModal
      }))
    }

    

  
  render(){
    const filtered = this.state.todos.filter(todo=>todo.text.toLowerCase().includes(this.state.filter.toLowerCase()))

    const todoQuantity = this.state.todos.length;

  return <>
    <GlobalStyle/>
    <Container>
      <AddButton onClick={this.handleShowModal} type="button">Додати задачу</AddButton>
      <Filter  filterTodo = {this.filterTodo} state={this.state.filter}/>
      <TodoList
        onDelete = {this.deleteTodo}
        todos={filtered}
        toggleComplete={this.toggleComplete}/>

      

      <Info todoQuantity={todoQuantity}/>
      {this.state.showModal && <Modal handleCloseModal={this.handleShowModal}><TodoEditor addTodo={this.addTodo} handleCloseModal={this.handleShowModal}/></Modal>}
      
    </Container>
</>}};