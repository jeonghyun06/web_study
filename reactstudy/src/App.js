import { useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (e) => setToDo(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDos((current) => [...current, toDo]);
    setToDo("");
  };
  const deleteTodo = (index) => {
    setToDos(toDos.filter((_, curIndex) => curIndex !== index));
  };
  return (
    <div>
      <h1>My To Do ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your todo..."
        />
        <button>Add To Do</button>
      </form>
      <hr />
      {toDos.map((item, index) => (
        <div key={index}>
          <li key={index}>
            {item}
            <button key={index} onClick={() => deleteTodo(index)}>
              delete to do
            </button>
          </li>
        </div>
      ))}
    </div>
  );
}

export default App;
