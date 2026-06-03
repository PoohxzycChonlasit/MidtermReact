import { api } from './client';

const userId = '8f8da2a4-2dd1-4c3c-80cb-0cc371c43ec1';

export async function getNotes(params = {}) {
  const { data } = await api.get(
    `/users/${userId}/notes`,
    {
      params,
    }
  );

  return data;
}

export async function getNoteById(noteId) {
  const { data } = await api.get(
    `/users/${userId}/notes/${noteId}`
  );

  return data;
}

export async function createNote(payload) {
  const { data } = await api.post(
    `/users/${userId}/notes`,
    payload
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