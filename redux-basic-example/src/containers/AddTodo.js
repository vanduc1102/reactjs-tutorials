import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions";

const AddTodo = ({ dispatch }) => {
  let inputElement;
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!inputElement.value.trim()) {
            return;
          }
          dispatch(addTodo(inputElement.value));
          inputElement.value = "";
        }}
      >
        <input ref={(node) => (inputElement = node)} />
        <button type="submit"> Add Todo</button>
      </form>
    </div>
  );
};

export default connect()(AddTodo);
