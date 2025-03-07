import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoList() {
  let [todos, setTodos] = useState([{ task: "Sample Task", id: uuidv4() }]);
  let [newTodo, setNewTodo] = useState("");

  let addNewTodo = () => {
    setTodos((preTodos) => {
      return [...preTodos, { task: newTodo, id: uuidv4() }];
    });
    setNewTodo("");
  };

  let updateTodoValue = (event) => {
    setNewTodo(event.target.value);
  };

  let deleteTodo = (id) => {
    setTodos((preTodos) => todos.filter((preTodos) => preTodos.id != id));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Add a Task"
        value={newTodo}
        onChange={updateTodoValue}
      />
      <br />
      <button onClick={addNewTodo}>Add Task</button>
      <br />
      <br />
      <hr />
      <h4>Tasks</h4>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span>{todo.task}</span>
            &nbsp; &nbsp; &nbsp;
            <button
              onClick={() => {
                deleteTodo(todo.id);
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
