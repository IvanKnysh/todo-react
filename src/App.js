import {useEffect, useState} from "react";
import Form from "./components/Form";
import List from "./components/List";
import './app.scss';

function App() {
  const [todos, setTodos] = useState([]);

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
      <List todos={todos} />
    </div>
  );
}

export default App;
