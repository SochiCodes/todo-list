import React, {useState} from 'react';
import './App.css';



function App() {
  const [list, setList] = useState([])
  const [input, setInput] = useState("")

  const addTodo = (todo) => {
    const newTodo = {
      id: Math.random(),
      todo: todo,
    };
  //add the todo to the list
  if (input === ""){
    return
  }
  setList([...list, newTodo]);

  //clear input box
  setInput("")

  }

  const deleteTodo = (id) => {
    //Filter our todo with the id
    const newList = list.filter((todo) => todo.id !== id);

    setList(newList);
  }

  return (
    <div className="container">
      <div className="wrapper">
        <h5>What do you want to do?</h5>
        <input 
          type="text" 
          value={input}
          onChange = {(e) => setInput(e.target.value)}
          />
          <button className="submit" onClick={() => addTodo(input)}>+</button>

        <ul>
          {list.map((todo) => (
            <li key={todo.id}>
              {todo.todo}
              <button onClick={() => deleteTodo(todo.id)}>X</button>
            </li>
          ))}
        </ul>
        </div>
    </div>
  );
}

export default App;
