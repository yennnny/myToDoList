import { useTodoList } from '../../hooks/useToList';

const List = () => {
  const { data: todoList = [] } = useTodoList(); // data의 값은 서버로부터 응답이 오기전까지 undefined이므로 배열로 초기화 해주자!

  return (
    <>
      <form>
        {todoList.map((todo, idx) => (
          <div className="todo" key={idx}>
            <input type="checkbox" id={`todo${idx}`} />
            <label htmlFor={`todo${idx}`}>{todo.text}</label>
            <div>
              <button>수정하기</button>
              <button>삭제하기</button>
            </div>
          </div>
        ))}
      </form>
    </>
  );
};
export default List;
