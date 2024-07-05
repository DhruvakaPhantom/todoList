import { useState } from "react";
import styles from "./form.module.css";
export default function Form({ todos, setTodos }) {
  const [todo, setTodo] = useState({ name: "", done: false });
  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo({ name: "", done: false });
  }
  return (
    <form onSubmit={handleSubmit} className={styles.modernForm}>
      <input
        className={styles.modernInput}
        type="text"
        name=""
        id=""
        placeholder="Enter Task"
        value={todo.name}
        onChange={(e) => setTodo({ name: e.target.value, done: false })}
      />
      <button className={styles.modernButton} type="submit">
        Add
      </button>
    </form>
  );
}
