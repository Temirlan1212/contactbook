import TodoCard from "../TodoCard/TodoCard";

const TodoList = ({ todos, handleDelete, handleEdit }) => {
  return (
    <>
      {todos.map((item, index) => (
        <TodoCard
          key={item.id}
          item={item}
          handleDelete={handleDelete}
          index={index}
          handleEdit={handleEdit}
        />
      ))}
    </>
  );
};

export default TodoList;
