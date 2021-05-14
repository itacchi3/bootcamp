import React from "react";

export const CompleteTodo = (props) => {
  const { completeTodos, onClickChangeDisplayFlag, displayFlag } = props;
  return (
    <div>
      {displayFlag ? (
        <div>
          <button onClick={() => onClickChangeDisplayFlag()}>
            {completeTodos.length === 0 ? "表示ボタン" : "表示しているよ"}
          </button>
          <ul>
            {completeTodos.map((todo) => {
              return (
                <div key={todo}>
                  <li>{todo}</li>
                </div>
              );
            })}
          </ul>
        </div>
      ) : (
        <div>
          <button onClick={() => onClickChangeDisplayFlag()}>表示ボタン</button>
        </div>
      )}
    </div>
  );
};
