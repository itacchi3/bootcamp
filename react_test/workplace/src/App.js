import React, { useState } from "react";
import { IncompleteTodo } from "./components/IncompleteTodo";
import { CompleteTodo } from "./components/CompleteTodo";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);
  const [displayFlag, setdisplayFlag] = useState(false);
  const [editFlag, setEditFlag] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const onChangeTodoText = (event) => setTodoText(event.target.value);

  const onClickAdd = () => {
    if (editFlag) {
      if (incompleteTodos.includes(todoText)) {
        alert("編集項目が変更されていません");
      } else {
        const incompleteTodos_copy = incompleteTodos;
        incompleteTodos_copy[editIndex] = todoText;
        setIncompleteTodos(incompleteTodos_copy);
        setTodoText("");
        setEditFlag(false);
      }
    } else {
      if (todoText === "") {
        alert("やることを入力してください");
      } else if (incompleteTodos.includes(todoText)) {
        alert("同名の項目が存在します");
      } else {
        const newTodos = [...incompleteTodos, todoText];
        setIncompleteTodos(newTodos);
        setTodoText("");
      }
    }
  };

  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };

  const onClickComplete = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);

    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  };

  const onClickChangeDisplayFlag = () => {
    setdisplayFlag(!displayFlag);
  };

  const onClickEdit = (index) => {
    setTodoText(incompleteTodos[index]);
    setEditFlag(true);
    setEditIndex(index);
  };

  return (
    <div>
      {completeTodos.length < 5 ? (
        <div>
          <div>Todoリスト作成</div>
          <div>
            <input
              placeholder="やること"
              value={todoText}
              onChange={onChangeTodoText}
            />
            <button onClick={onClickAdd}>保存</button>
          </div>
          <div>Todoリスト</div>
          <IncompleteTodo
            incompleteTodos={incompleteTodos}
            onClickComplete={onClickComplete}
            onClickDelete={onClickDelete}
            onClickEdit={onClickEdit}
          />
          <CompleteTodo
            completeTodos={completeTodos}
            onClickChangeDisplayFlag={onClickChangeDisplayFlag}
            displayFlag={displayFlag}
          />
        </div>
      ) : (
        <div style={{ fontSize: "200px" }}>Bootcamp突破おめでとう!!</div>
      )}
    </div>
  );
};
