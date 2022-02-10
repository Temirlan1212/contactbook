import { useState } from "react";
import AddTodo from "./AddTodo/AddTodo";
import "./App.css";
import EditModal from "./EditModal/EditModal";
import TodoList from "./TodoList/TodoList";

function App() {
  let [todos, setTodos] = useState([]);

  let [modal, setModal] = useState(false);
  let [editTodo, setEdtitTodo] = useState({});

  //* ФУНЦИЯ ОТОБРАЖЕНИЯ iNP.VAL("")
  function handleTask(newObj) {
    let newTodos = [...todos];
    newTodos.push(newObj);
    setTodos(newTodos);
  }

  //* функция удаления
  function handleDelete(id) {
    let newTodos = todos.filter((item) => {
      console.log(item.id);
      return item.id !== id;
    });
    setTodos(newTodos);
  }

  //* функция редактирования
  function handleEdit(index) {
    setModal(true);
    setEdtitTodo(todos[index]);
  }

  function handleSaveTask(newTask) {
    const newTodos = todos.map((item) => {
      console.log(item.id);
      if (item.id === newTask.id) {
        return newTask;
      }
      return item;
    });
    setTodos(newTodos);
    handleCloseModal(false);
  }

  function handleCloseModal() {
    setModal(false);
  }
  return (
    <>
      <AddTodo handleTask={handleTask} />
      <TodoList
        todos={todos}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />
      {modal ? (
        <EditModal
          editTodo={editTodo}
          handleSaveTask={handleSaveTask}
          handleCloseModal={handleCloseModal}
        />
      ) : (
        ""
      )}
    </>
  );
}

export default App;
