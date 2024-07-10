import { useState } from "react";
import { useDispatch } from "react-redux";

import { addTodo } from "../features/todo/todoSlice";

function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };

  return (
    <div className="bg-slate-200 rounded-lg shadow-md m-4 p-2">
      <form onSubmit={addTodoHandler} className="space-x-3 ">
        <input
          type="text"
          className="bg-gray-700 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-0 px-3 leading-8 transition-colors duration-200 ease-in-out"
          placeholder="Enter a Todo..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="submit"
          className="text-white bg-blue-500 border-0 py-1 px-4 focus:outline-none hover:bg-blue-600 rounded text-md align-top"
        >
          Add Todo
        </button>
      </form>
    </div>
  );
}

export default AddTodo;
