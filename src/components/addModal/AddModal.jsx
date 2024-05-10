import { useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { formatDateYYYYMMDD } from '../../utils/getDate';

const AddModal = ({ onCloseModal }) => {
  const todoTextRef = useRef();
  const todoDateRef = useRef();

  const [todo, setTodo] = useState({
    todoText: '',
    todoDate: formatDateYYYYMMDD(new Date()),
  });

  const handleSaveTodo = () => {
    if (todo.todoText.length < 3) {
      return;
    }
  };

  const handleChangeInput = (e) => {
    setTodo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return createPortal(
    // createPortal(리턴값, 리턴값의 위치)
    <>
      <h2>New Task</h2>
      <button type="button" className="btn-close" onClick={onCloseModal}>
        닫기
      </button>
      <form onSubmit={handleSaveTodo}>
        <div className="">
          <label htmlFor="todoText">무엇을 계획하고 있나요?</label>
          <input
            ref={todoTextRef}
            type="text"
            id="todoText"
            name="todoText"
            value={todo.todoText}
            onChange={handleChangeInput}
          />
          <button type="button" className="btn-delete">
            지우기
          </button>
        </div>
        <div className="">
          <label htmlFor="todoDate">언제 하실 계획인가요?</label>
          <input
            ref={todoDateRef}
            type="date"
            id="todoDate"
            name="todoDate"
            value={todo.todoDate}
            onChange={handleChangeInput}
          />
        </div>
        <>
          <button>SAVE</button>
          <button type="reset">CANCLE</button>
        </>
      </form>
    </>,
    document.querySelector('body')
  );
};

export default AddModal;
