import { memo } from "react";

const TodosCB = ({todos, addTodo}) => {
  console.log("child render");
  return (
    <>
    <h2>TO-DO list</h2>
    {todos.map((todo, index) => {
      return <li key={index}>{todo}</li>;
    })}
    <button onClick={addTodo}>Add Todo</button>
    </>

  );
}

export default memo(TodosCB);
