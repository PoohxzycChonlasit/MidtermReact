import { api } from './client';

const userId = 'e876b7df-e9d8-434d-ac03-3dd2770b9a1c';

export async function getNotes(params = {}) {
  const { data } = await api.get(
    `/users/${userId}/notes`,
    {
      params,
    }
  );

  return data.data.items ?? [];
}

export async function getNoteById(noteId) {
  const { data } = await api.get(
    `/users/${userId}/notes/${noteId}`
  );

  return data;
}

export async function createNote(load) {
  const { data } = await api.post(
    `/users/${userId}/notes`,
    load
  );

  return data;
}

export async function updateNote({
  noteId,
  title,
  content,
}) {
  const { data } = await api.patch(
    `/users/${userId}/notes/${noteId}`,
    {
      title,
      content,
    }
  );

  return data;
}

export async function deleteNote(noteId) {
  await api.delete(
    `/users/${userId}/notes/${noteId}`
  );

  return noteId;
}
