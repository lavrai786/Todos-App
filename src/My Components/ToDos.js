import React from "react";
import { TodoItem } from "./TodoItem";

export const ToDos = (props) => {
  let myStyle={
    minHeight:"70vh",
    margin:"40px auto"
  }
  return (
    <div className="container" style={myStyle}>
      <h3 className=" my-3">Todos List</h3>
      {props.todos.length === 0 ? (
        <>
          <div class="card">
            <div class="card-body">No More Todos Left here!!</div>
          </div>
        </>
      ) : (
        props.todos.map((todo) => {
          return (
            <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
          );
        })
      )}
    </div>
  );
};
