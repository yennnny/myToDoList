import { getToDoList } from '../api/todolist';

export const useTodoList = () => {
  return useQuery({
    queryKey: TodoKey.list,
    queryFn: () => {
      return getToDoList().then(({ data }) => data);
      // Axios는 data로 감싸주기 때문에 함수를 하나 더 만들어서 내부에서 호출해주기!
    },
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
