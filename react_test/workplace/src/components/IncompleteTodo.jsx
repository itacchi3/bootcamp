import React from "react";

export const IncompleteTodo = (props) => {
  const {
    incompleteTodos,
    onClickComplete,
    onClickDelete,
    onClickEdit,
  } = props;
  return (
    <div>
      <ul>
        {incompleteTodos.map((todo, index) => {
          return (
            <div key={todo}>
              <li onClick={() => onClickEdit(index)}>{todo}</li>
              <button onClick={() => onClickComplete(index)}>完了</button>
              <button onClick={() => onClickDelete(index)}>削除</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
