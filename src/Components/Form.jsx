import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, updateTodo } from "../Redux/todo/todoAction";

const Form = () => {
  const { edit } = useSelector((state) => state.todo);

  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    title: "",
    des: "",
  });

  // console.log(formData);

  const { title, des } = formData;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

    const handleSubmit = (e) => {
      e.preventDefault();
      if (edit.isEdit) {
        dispatch(updateTodo({ id : edit.todo.id, title, des }));
      } else {
        dispatch(
          addTodo({
            id: crypto.randomUUID(),
            title,
            des,
          })
        );
      }
      setFormData({
        title: "",
        des: "",
      });
    };

  useEffect(() => {
    setFormData({
      title: edit.todo.title,
      des: edit.todo.des,
    });
  }, [edit]);

  return (
    <div className="w-100 d-flex align-items-center justify-content-center my-4">
      <form
        action=""
        className="d-flex align-items-center justify-content-center flex-column w-50"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Enter Title Here"
          className="form-control"
          name="title"
          value={title}
          required
          onChange={handleChange}
        />
        <textarea
          row="3"
          cols="30"
          placeholder="Enter Description Here"
          className="form-control my-3"
          name="des"
          required
          value={des}
          onChange={handleChange}
        ></textarea>
        <button className="btn btn-danger text-light contained form-control rounded-0">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
