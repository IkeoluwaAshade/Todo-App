import React from 'react'
import './Button.css'
import {useState} from 'react'

// function MyForm () {
//   const [name, setName] =useState ('Ikeoluwa');
// }

const Button = () => {
  const [todo, setTodo] =useState('');
  const [todoArray, setTodoArray] =useState('');

  const handleChange = (e) => {
    const todoName =e.target.value;
    setTodo(todoName);
  };

  const handleClick =() =>{
    todo ? setTodoArray((prev) => [...prev, todo]) : alert('please fill in Something');
  }

  return (
    <div>
      <form className='formStyle'>

        <input placeholder={'Add Todo'} />

        {/* <input type='text' value={name} onChange={(e) => setName(e.target.value)} /> */}

        <button type='Submit'>Add Todo</button>
      </form>
    
    </div>
  )
}

export default Button 