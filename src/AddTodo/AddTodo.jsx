import React, { useState } from "react";
import "./AddTodo.css";

const AddTodo = ({ handleTask }) => {
  let [name, setName] = useState("");
  let [lastName, setLastName] = useState("");
  let [number, setNumber] = useState("");
  let [image, setImage] = useState("");

  function handleAdd() {
    if (!name || !lastName || !number || !image) {
      alert("Заполни все по братски");
      return;
    }

    let newTask = {
      image,
      name,
      lastName,
      number,

      id: Date.now(),
    };
    handleTask(newTask);
    setName("");
    setLastName("");
    setNumber("");
    setImage("");
  }

  return (
    <>
      <div className="inputs">
        <input
          type="text"
          placeholder="image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="lastname"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <input
          type="text"
          placeholder="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />

        <button onClick={handleAdd}>add</button>
      </div>
    </>
  );
};

export default AddTodo;
