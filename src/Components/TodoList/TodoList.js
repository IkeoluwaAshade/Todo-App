import React from 'react'
import './TodoList.css'

const TodoList = ({item}) => {
  return (
    <flex>
        <text>{item}</text>
    </flex>
  )
}

export default TodoList