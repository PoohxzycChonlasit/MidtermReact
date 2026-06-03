import useTodos from "../hooks/useTodos";
import ItemCom from "./ItemCom";

export default function ListCom({ filters, onEdit }) {
  const { data: notes, isLoading, isError } = useTodos(filters);

  if (isLoading) return <p className="text-center text-gray-500">Loading…</p>;
  if (isError)
    return <p className="text-center text-red-500">Something went wrong.</p>;
  if (notes.length === 0)
    return <p className="text-center text-gray-500">No notes found.</p>;

  return (
    <ul className="space-y-2">
      {notes.map((note) => (
        <ItemCom key={note.id} note={note} onEdit={onEdit} />
      ))}
    </ul>
  );
}
