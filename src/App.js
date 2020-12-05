import React, {useState} from 'react';
import './App.css';

//importing components
import Form from './components/Form'
import TodoList from './components/TodoList';

function App() {

  const [inputText, setinputText] = useState('');
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <header>Rafa's To Do List</header>
      <Form inputText={inputText} todos={todos} setTodos={setTodos} setinputText={setinputText} />
      <TodoList todos={todos}/>
     
    </div>
  );
}

export default App;
