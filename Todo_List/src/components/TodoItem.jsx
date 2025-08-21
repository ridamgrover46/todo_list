export default function TodoItem({ todo, toggleTodo, deleteTodo }) {
  return (
    <div className="flex items-center justify-between p-2 border-b">
      <span
        onClick={() => toggleTodo(todo.id)}
        className={`cursor-pointer flex-1 ${
          todo.completed ? "line-through text-gray-500" : ""
        }`}
      >
        {todo.text}
      </span>
      <button
        onClick={() => deleteTodo(todo.id)}
        className="ml-2 px-2 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600"
      >
        Delete
      </button>
    </div>
  );
}
