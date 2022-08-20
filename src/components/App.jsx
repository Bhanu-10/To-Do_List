import React, { useState } from "react";
import InputArea from "./InputArea";
import TodoItem from "./TodoItem";

function App() {
  const [items, setItems] = useState([]);

  function deleteItem(id) {
    setItems((preItems) => {
      return preItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  function addItem(inputText) {
    setItems((preItems) => {
      return [...preItems, inputText];
    });
  }
  // to capture text of input

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea insertItem={addItem} />
      <div>
        <ul>
          {items.map((item, index) => {
            return (
              <TodoItem
                key={index}
                id={index}
                text={item}
                onChecked={deleteItem}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
