import { useState } from "react";
import { useCreateTodo, useUpdateTodo } from "../hooks/useTodos";

export default function FromCom({ editingTodo, onDone }) {
  const [title, setTitle] = useState(editingTodo ? editingTodo.title : "");
  const createTodo = useCreateTodo();
  const updateTodo = useUpdateTodo();
  const isEditing = Boolean(editingTodo);

  function handleSubmit(event) {
    event.preventDefault();
    const trimmed = title.trim();
    if (!trimmed) return;

    if (isEditing) {
      updateTodo.mutate(
        { id: editingTodo.id, title: trimmed },
        { onSuccess: () => onDone() },
      );
    } else {
      createTodo.mutate({ title: trimmed });
      setTitle("");
    }
  }

  const isPending = createTodo.isPending || updateTodo.isPending;

  return (
    <div className="rounded-xl bg-white p-4 ">
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          className="w-full rounded-lg border px-3 py-2 "
          placeholder="New todo"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        {isEditing ? (
          <div className="flex gap-2">
            <button
              type="submit"
              disabled={!title.trim() || isPending}
              className="flex-1 rounded-lg bg-teal-500 py-2 text-white"
            >
              Save
            </button>
            <button
              type="button"
              onClick={onDone}
              className="flex-1 rounded-lg border py-2 hover:bg-gray-100"
            >
              Cancel
            </button>
          </div>
        ) : (
          <button
            type="submit"
            disabled={!title.trim() || isPending}
            className="w-full rounded-lg bg-teal-500 py-2 text-white"
          >
            Add
          </button>
        )}
      </form>
    </div>
  );
}
