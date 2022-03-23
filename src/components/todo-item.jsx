import { createSignal, Show } from "solid-js";
import styles from "./style.module.css"
function TodoItem(props) {
  const { updateList, data } = props;
  const [getEditStatus, setEditStatus] = createSignal(false);
  let editInput = null
  const handleChange = (e) => {
    updateList({
      ...data,
      check: e.target.checked,
    });
  };
  const hanelEdit = () => {
      if(getEditStatus()){
          return
      }
      setEditStatus((prev) => !prev)
      editInput.focus()
  };
  const handleBlur = (e) => {
      updateList({
          ...data,
          name: e.target.value
      })
  }
  return (
    <div className={styles.Item}>
      <label htmlFor="">name:</label>
      <Show when={getEditStatus()}>
        <input ref={editInput} onBlur={handleBlur} type="text" value={data.name} />
      </Show>
      <Show when={!getEditStatus()}>
        <span>{data.name}</span>
      </Show>
      <input type="checkbox" onChange={handleChange} checked={data.check} />
      <button onClick={hanelEdit}>编辑</button>
    </div>
  );
}

export default TodoItem;
