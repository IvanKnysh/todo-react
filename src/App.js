import {useEffect, useState} from "react";
import {Context} from "./Context";
import Form from "./components/Form";
import List from "./components/List";
import Header from "./components/Header";
import useAuth from "./components/useAuth";
import './app.scss';

import firebase from 'firebase/compat/app';
import "firebase/compat/auth";
import "firebase/compat/database";

const firebaseConfig = {
  apiKey: "AIzaSyCZT9cb_r9-3jkorBvO4SssmeCCFI2gAUE",
  authDomain: "react-todo-7ef07.firebaseapp.com",
  databaseURL: "https://react-todo-7ef07-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "react-todo-7ef07",
  storageBucket: "react-todo-7ef07.appspot.com",
  messagingSenderId: "972129768220",
  appId: "1:972129768220:web:a83d319b661503c44da0d9"
};

firebase.initializeApp(firebaseConfig);

function App() {
  const [todos, setTodos] = useState([]);

  const auth = useAuth(firebase.auth);

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
        <Header {...auth} />
        {
          auth.authentication
            ?
            <>
              <Form todos={todos} setTodos={setTodos} authentication={auth.authentication} firebaseDatabase={firebase.database} />
              <List todos={todos} setTodos={setTodos} />
            </>
            :
            <h3>Ви вийшли із системи</h3>
        }
      </div>
    </Context.Provider>
  );
}

export default App;
