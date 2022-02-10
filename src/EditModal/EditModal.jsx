import React, { useState } from "react";
import "./EditModal.css";

const EditModal = ({ editTodo, handleSaveTask, handleCloseModal }) => {
  let [item, setItem] = useState(editTodo);

  function handleEditInput1(e) {
    let newObj = { ...item };
    newObj.name = e.target.value;
    setItem(newObj);
  }
  function handleEditInput2(e) {
    let newObj = { ...item };
    newObj.lastName = e.target.value;
    setItem(newObj);
  }
  function handleEditInput3(e) {
    let newObj = { ...item };
    newObj.number = e.target.value;
    setItem(newObj);
  }
  function handleEditInput4(e) {
    let newObj = { ...item };
    newObj.image = e.target.value;
    setItem(newObj);
  }

  function handleSave() {
    handleSaveTask(item);
  }

  return (
    <>
      <div className="main-modal">
        <div className="inner-modal">
          <input
            onChange={handleEditInput1}
            type="text"
            value={item.name}
            className="inp-edit"
          />
          <input
            onChange={handleEditInput2}
            type="text"
            value={item.lastName}
            className="inp-edit"
          />
          <input
            onChange={handleEditInput3}
            type="text"
            value={item.number}
            className="inp-edit"
          />
          <input
            onChange={handleEditInput4}
            type="text"
            value={item.image}
            className="inp-edit"
          />
          <div className="btns">
            <button onClick={handleSave}>save</button>
            <button onClick={handleCloseModal}>&times;</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditModal;
