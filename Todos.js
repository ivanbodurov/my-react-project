import { memo } from "react";
const Todos = ({ todos }) => {  // props
  console.log('child render');
  return (
    <>
      <h2>My todos</h2>
      {todos.map((todo, index) => {
        return <li key={index}>{todo}</li>;
      })}
    </>
  );
}

export default memo(Todos);
