import React, { useState} from 'react';
import './ToDoList.css';

function ToDoList() {

  const [todos, setTodos] = useState(['make coffee', 'walk dog', 'eat breakfast']);
  const [newTodo, setNewTodo] = useState('');

  function addTodo() {
    if(newTodo.trim() !== '') {
      setTodos(t => [...t, newTodo]);
      setNewTodo('');
    }
  }

  function handleInputChange(event) {
    setNewTodo(event.target.value);
  }

  function deleteTodo(index) {
    const updatedTodos = todos.filter((element, i) => i !== index);
    setTodos(updatedTodos);
  }

  function moveTodoUp(index) {
    if (index > 0) {
      const updatedTodos = [...todos];
      [updatedTodos[index], updatedTodos[index -1]] = [updatedTodos[index -1], updatedTodos[index]];
      setTodos(updatedTodos);
    }
  }

  function moveTodoDown(index) {
    if(index < todos.length) {
      const updatedTodos = [...todos];
      [updatedTodos[index], updatedTodos[index +1]] = [updatedTodos[index +1], updatedTodos[index]];
      setTodos(updatedTodos);
    }
  }
  return (
    <div className='to-do-list'>
      <h1 className='title'>To Do List</h1>
      <input className='input' type='text' placeholder='add a todo...' value={newTodo} onChange={handleInputChange}/>
      <button className='button' onClick={addTodo}>Add</button>
      <ol>
        {todos.map((todo, index) =>
          <li key={index}>
            <span className="todo-text">{todo}</span>
            <button className='delete-button' onClick={() => deleteTodo(index)}>Delete</button>
            <button className='up-button' onClick={() => moveTodoUp(index)}>👆</button>
            <button className='down-button' onClick={() => moveTodoDown(index)}>👇</button>
          </li>
        )}
      </ol>
    </div>
  );
}

export default ToDoList;
