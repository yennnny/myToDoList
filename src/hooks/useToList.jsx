import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getToDoList, saveTodo } from '../api/todolist';
const TodoKey = {
  all: 'todo',
  list: () => [TodoKey.all],
  detail: (id) => [TodoKey.all, id],
};

export const useTodoList = () => {
  return useQuery({
    queryKey: TodoKey.list(),
    queryFn: () => {
      return getToDoList().then(({ data }) => data);
      // Axios는 data로 감싸주기 때문에 함수를 하나 더 만들어서 내부에서 호출해주기!
    },
  });
};

// useQuery는 호출하자마자 queryFn이 호출되지만 useMutation은 mutationFn이 즉시 호출되지 않음
// useQuery는 조회 / useMutaion은 추가, 수정, 삭제 의 경우이므로 사용자의 액션에 의해 발생되기때문

export const useSaveTodo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    // mutationFn에서는 API를 호출한후에 값을 반환하지 않아도 항상 return을 해야 함
    // 왜냐하면 mutationFn 내부에서 실행한 호출이 완료가 되었는지를 리액트 쿼리가 알아야하기 때문!
    mutationFn: (todo) => {
      return saveTodo(todo);
    },

    onSuccess() {
      // 기존 데이터를 다시 불러오는 방법
      // 1. refetch: refetch를 호출하자마자 바로 API를 호출(실제 데이터를 사용하지 않는데 미리 데이터를 가져오는것)
      // 2. invalid: 호출하자마자 호출되는게 아니라 해당 데이터를 실제로 사용하는 컴포넌트(훅)을 사용할때 호출

      queryClient.invalidateQueries({
        // 호출하면 해당 데이터가 유효하지 않은 상태로 변경해줌 -> 실제 이 데이터를 사용하는 컴포넌트가 렌더링 될 때 해당 queryFn이 호출되는데 이를 활용해서 데이터를 다시 조회하고 싶을 때 이 함수를 사용
        // 앞의 상태는 state: 우리가 흔히 리액트에서 말하는 데이터, 뒤의 상태는 status: 정상, 비정상 이런거 얘기할때의 상태 같은 느낌
        queryKey: TodoKey.list(),
      });
    },
  });
};

// all은 공통적으로 사용하고, 새로 추가하고 싶을 때
// export const useTest = () => {
//   return useQuery({
//     queryKey: TodoKey.detail('id'),
//     queryFn: getToDoList,
//   });
// };
