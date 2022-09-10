import {useEffect, useState} from "react";
import {Context} from "./Context";
import Form from "./components/Form";
import List from "./components/List";
import './app.scss';

function App() {
  const [todos, setTodos] = useState([]);

  const checkBtn = (id) => {
    setTodos(
      todos.map(item => item.id === id ? {...item, completed: !item.completed} : item)
    );
  }

  const deleteItem = (id) => {
    setTodos(
      todos.filter(item => item.id !== id)
    );

    if (todos.length === 1) {
      localStorage.setItem('Todos', JSON.stringify([]));
    }
  }

  useEffect(() => {
    const getData = JSON.parse(localStorage.getItem('Todos')) || [];
    setTodos(getData);
  }, []);

  useEffect(() => {
    if (todos.length > 0) {
      localStorage.setItem('Todos', JSON.stringify(todos));
    }
  }, [todos]);

  return (
    <Context.Provider value={{checkBtn, deleteItem}}>
      <div className="todo">
        <h2>Список завань</h2>
        <Form todos={todos} setTodos={setTodos} />
        <List todos={todos} setTodos={setTodos} />
      </div>
    </Context.Provider>
  );
}

export default App;
