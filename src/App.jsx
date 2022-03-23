import { createSignal, createEffect } from "solid-js";
import styles from "./App.module.css";
import TodoList from "./components/todo-list";

function App() {
  
  return (
    <div class={styles.App}>
      <TodoList list={list()} />
    </div>
  );
}

export default App;
