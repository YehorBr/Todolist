import { useEffect, useState } from 'react';
import { GlobalStyle } from '../GlobalStyle';
import { Container } from './Container/Container';
import { TodoList } from './TodoList/TodoList';
import { TodoEditor } from './TodoEditor/TodoEditor';
import { Info } from './Info/Info';
import initialTodos from '../todo.json';
import { Filter } from './Filter/Filter';
import { Modal } from './Modal/Modal';
import { AddButton } from './TodoEditor/TodoEditor.styled';

export const App = () => {
  const [todos, setTodos] = useState(initialTodos);
  const [showModal, setModal] = useState(false);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    return () => {
      const todos = localStorage.getItem('todos');
      if (todos) {
        const parsedTodos = JSON.parse(todos);
        setTodos({ parsedTodos });
      }
    };
  }, []);

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

  const deleteTodo = id => {
    setTodos(prevState => prevState.filter(todo => todo.id !== id));
  };

  const addTodo = todoText => {
    const newTodo = {
      id: Date.now(),
      text: todoText,
      completed: false,
    };

    setTodos(prevState => [...prevState, newTodo]);
  };

  const toggleComplete = id => {
    setTodos(prevState => {
      prevState.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      );
    });
  };

  const filterTodo = text => {
    setFilter({ text });
  };

  const handleShowModal = () => {
    setModal(prevState => !prevState);
  };

  const filtered = todos.filter(todo =>
    todo.text.toLowerCase().includes(filter.toLowerCase()));

  const todoQuantity = todos.length;

  return (
    <>
      <GlobalStyle />
      <Container>
        <AddButton onClick={handleShowModal} type="button">
          Додати задачу
        </AddButton>
        <Filter filterTodo={filterTodo} state={filter} />
        <TodoList
          onDelete={deleteTodo}
          todos={filtered}
          toggleComplete={toggleComplete}
        />

        <Info todoQuantity={todoQuantity} />
        {showModal && (
          <Modal handleCloseModal={handleShowModal}>
            <TodoEditor
              addTodo={addTodo}
              handleCloseModal={handleShowModal}
            />
          </Modal>
        )}
      </Container>
    </>
  );
};
