import React, { useState } from 'react';
import Inputs from "../../Components/Inputs/Inputs";
import { v4 as uuidv4 } from 'uuid';
import "./Home.css";
import Todos from '../Todos/Todos';
import Toast from '../Toast/Toast';

function Home() {
  const [message, setMessage] = useState('');
  const [addTodoItem, setAddTodoItem] = useState([]);

  const [todoItems, setTodoItems] = useState({
    title: "",
    desc: "",
  });

  const handleChange = (e) => {
    setTodoItems({ ...todoItems, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(todoItems);
    const newItems = {
      id: uuidv4(),
      createAt: new Date(),
      title: todoItems.title,
      desc: todoItems.desc
    };
    setAddTodoItem([newItems, ...addTodoItem]);
  };

  const handleDelete = (id) => {
    const deleteTodo = addTodoItem.filter(todo => todo.id !== id);
    if (deleteTodo) {
      setMessage("Delete successful");
      setAddTodoItem(deleteTodo);
    } else {
      setMessage("Cannot delete");
    }
  };
  const handleEdit = (id)=>{
    console.log("edit", id)
   }
  return (
    <>
      <div className='home'>
        {message && <Toast message={message}/>}
        <form onSubmit={handleSubmit}>
          <Inputs
            placeholder="Enter Title"
            name="title"
            handleChange={handleChange}
          />
          <Inputs
            className="textarea"
            name="desc"
            placeholder="Enter Description"
            handleChange={handleChange}
          />
          <button className='btn btn-primary' type='submit'>Submit</button>
        </form>

        <div className="todos">
          <h2 className='text-center my-4 border-bottom'>Todos Items</h2>
          <Todos
            todo={addTodoItem}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        </div>
      </div>
    </>
  );
}

export default Home;
