import { getToDoList } from '../api/todolist';

export const useTodoList = () => {
  return useQuery({
    queryKey: TodoKey.list,
    queryFn: getToDoList,
  });
};

const TodoKey = {
  all: 'todo',
  list: [TodoKey.all],
  detail: (id) => [TodoKey.all, id],
};

// all은 공통적으로 사용하고, 새로 추가하고 싶을 때
// export const useTest = () => {
//   return useQuery({
//     queryKey: TodoKey.detail('id'),
//     queryFn: getToDoList,
//   });
// };
