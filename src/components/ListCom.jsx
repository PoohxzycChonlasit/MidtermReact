import useTodos from "../hooks/useTodos";
import ItemCom from "./ItemCom";

export default function ListCom({ filters, onEdit }) {
  const { data: todos, isLoading, isError } = useTodos(filters);

  if (isLoading) return <p className="text-center text-gray-500">Loading…</p>;
  if (isError)
    return <p className="text-center text-red-500">Something went wrong.</p>;
  if (todos.length === 0)
    return <p className="text-center text-gray-500">No todos found.</p>;

  return (
    <ul className="space-y-2">
      {todos.map((todo) => (
        <ItemCom key={todo.id} todo={todo} onEdit={onEdit} />
      ))}
    </ul>
  );
}
