import { keepPreviousData, useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { createNote, deleteNote, getNotes, updateNote } from '../api/todos';


export default function useTodos(filters = {}) {
  return useQuery({
    queryKey: ['todos'],
    queryFn: () => getNotes(filters),
    placeholderData: keepPreviousData
  })
}

export function useCreateTodo() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createNote,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['todos'] })
  });
}

export function useUpdateTodo() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateNote,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['todos'] })
  });
}

export function useDeleteTodo() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteNote,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['todos'] })
  });
}
