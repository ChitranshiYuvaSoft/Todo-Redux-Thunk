import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, editTodo } from "../Redux/todo/todoAction";

const ListItems = ({item}) => {
    const dispatch = useDispatch();

    const handleDelete = (id) => {
          dispatch(deleteTodo(id))
        }

    const handleEdit = (item) => {
      console.log("Edit Successfully")
      dispatch(editTodo(item))
    }
  return (
    <li className="text-group-items d-flex align-items-center justify-content-between w-100 my-2 border p-2">
      <span>{item.title} : {item.des}</span>
      <span className=" d-flex align-items-center justify-content-between ">
        <button className="btn btn-warning text-light mx-2" onClick={() => handleEdit(item)}>Edit</button>
        <button className="btn btn-danger text-light" onClick={()=>handleDelete(item.id)}>Delete</button>
      </span>
    </li>
  );
};

export default ListItems;
