import React from 'react'
import { useSelector } from 'react-redux'
import ListItems from './ListItems'

const ListGroup = () => {
  const todos = useSelector(state => state.todo)
  const todoData = todos.todos



  // console.log(todoData, "todoData")
  
  return (
    <div className='w-100 d-flex align-items-center justify-content-center my-4'>
    <ul className='d-flex align-items-center justify-content-center flex-column w-50 list-group'>
      {
       todoData.map((item, index) => <ListItems key={index} item={item}/>)
      }
    </ul>
   </div>
  )
}

export default ListGroup