const List = () => {
  return (
    <>
      <section>
        <div>
          <input type="checkbox" id="toDo" />
          <label htmlFor="toDo">배열 메서드 정리</label>
          <div>
            <button>수정하기</button>
            <button>삭제하기</button>
          </div>
          {/* 수정할때 
          <div>
            <button>완료하기</button>
            <button>취소하기</button>
          </div>
          */}
        </div>
      </section>
    </>
  );
};
export default List;
