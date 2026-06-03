import { Pencil, Trash2 } from "lucide-react";
import { useDeleteTodo, useUpdateTodo } from "../hooks/useTodos";


export default function ItemCom({ note, onEdit }) {
  const updateTodo = useUpdateTodo()
  const deleteTodo = useDeleteTodo();

  function handleDelete() {
    deleteTodo.mutate(note.id);
  }

  function handleToggle() {
    updateTodo.mutate({ id: note.id, completed: !note.completed });
  }

    return (
    <li className="flex items-center justify-between rounded-lg border bg-white px-4 py-3 shadow-sm transition-shadow hover:shadow-md">
      <label className="flex items-center gap-3">
        <input type="checkbox" checked={note.completed} onChange={handleToggle} />
        <span className={note.completed ? 'text-red-500 line-through' : ''}>{note.title}</span>
      </label>
      <div className="flex items-center gap-3">
        <button onClick={() => onEdit(note)} className="text-yellow-500" aria-label="Edit note">
          <Pencil size={18} />
        </button>
        <button
          onClick={handleDelete}
          disabled={deleteTodo.isPending}
          className="text-red-500 disabled:opacity-50"
          aria-label="Delete todo"
        >
          <Trash2 size={18} />
        </button>
      </div>
    </li>
  );
}
