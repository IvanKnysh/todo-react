import {useEffect, useState} from "react";
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
    const row = JSON.parse(localStorage.getItem('Todos'));
    if (row) {
      setTodos(row);
    }
  }, []);

  useEffect(() => {
    if (todos.length > 0) {
      localStorage.setItem('Todos', JSON.stringify(todos));
    }
  }, [todos]);

  return (
    <div className="todo">
      <h2>Список завань</h2>
      <Form todos={todos} setTodos={setTodos} />
      <List todos={todos} setTodos={setTodos} checkBtn={checkBtn} deleteItem={deleteItem} />
    </div>
  );
}

export default App;
