/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { useTodoContext } from "../../context/todos.context";

export function TodosForm({ values }) {
  const { onSubmit } = useTodoContext();
  const [title, setTitle] = useState(values.title || "");
  const [isDone, setIsDone] = useState(values.isDone || false);

  useEffect(() => {
    setTitle(values.title || "");
    setIsDone(values.isDone || false);
  }, [values]);

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
      <div className="mb-4">
        <input
          type="text"
          placeholder="Enter Todo"
          className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
          required
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
      </div>
      <div className="mb-4">
        <select
          name="status"
          id="status"
          className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
          required
          onChange={(e) => setIsDone(e.target.value === "done")}
          value={isDone ? "done" : "not-done"}
        >
          <option value="not-done">Not Done</option>
          <option value="done">Done</option>
        </select>
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
        onClick={(e) => {
          e.preventDefault();
          onSubmit({ title, isDone });
        }}
      >
        Submit
      </button>
    </div>
  );
}

