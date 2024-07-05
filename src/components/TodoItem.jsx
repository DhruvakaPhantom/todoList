import styles from "./todoItem.module.css";
export default function TodoItem({ item, todos, setTodos }) {
  function handleDelete(item) {
    setTodos(todos.filter((todo) => todo !== item));
    console.log(item);
  }
  function handleComplete(name) {
    setTodos(
      todos.map((todo) =>
        todo.name === name ? { ...todo, done: !todo.done } : todo
      )
    );
  }
  const addCls = item.done ? styles.completed : "";
  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        <div className={addCls} onClick={() => handleComplete(item.name)}>
          {item.name}
        </div>
        <span>
          <button onClick={() => handleDelete(item)} className={styles.delete}>
            X
          </button>
        </span>
      </div>
      <hr className={styles.line} />
    </div>
  );
}
