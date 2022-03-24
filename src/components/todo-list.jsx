import TodoItem from "./todo-item";
import { createEffect, createSignal, For, Index } from "solid-js";
import { v4 as uuidv4 } from "uuid";
function TodoList() {
  createEffect(() => {
      let todolistsolidjs = localStorage.getItem("todolist-solidjs")
      if(todolistsolidjs){
          setList(JSON.parse(todolistsolidjs))
      }
  }, []);
  const [getValue, setValue] = createSignal("");
  const [getList, setList] = createSignal([]);
  const handleSave = (e) => {
    if (e.keyCode === 13) {
      setValue(e.target.value);
      setList((prev) => {
        prev.push({ id: uuidv4(), name: getValue(), check: false });
        return [...prev];
      });
      setValue("");
    }
  };
  const updateList = (data) => {
    setList(
      getList().map((item) => {
        if (item.id === data.id) {
          return data;
        }
        return item;
      })
    );
  };
  const handleClick = () => {
    console.log("click")
    localStorage.setItem("todolist-solidjs", JSON.stringify(getList()));
  };
  const handleDbClick = () => {
    console.log("dbclick")
    localStorage.setItem("todolist-solidjs", JSON.stringify(getList()));
  }
  return (
    <div>
      <input
        type="text"
        onKeyDown={handleSave}
        value={getValue()}
        placeholder="请输入内容"
      />
      <button onClick={handleClick}>本地点击保存</button>
      <button onDoubleClick={handleDbClick}>本地双击保存</button>
      <For each={getList()}>
        {(item) => <TodoItem updateList={updateList} data={item} />}
      </For>
    </div>
  );
}

export default TodoList;
