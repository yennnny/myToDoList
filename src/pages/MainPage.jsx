import { useDispatch, useSelector } from 'react-redux';
import Date from '../components/date/Date';
import List from '../components/list/List';
import { modalAction } from '../store/slices/modal';
import AddModal from '../components/addModal/AddModal';

const MainPage = () => {
  const dispatch = useDispatch();
  const showModal = useSelector((state) => state.showModal.showModal); // 불러올 state 가져오기 (store/index.js에서 적어준 이름으로 쓴다 / 그다음 showModal은 initialState 안에 있는 값)

  const handleOpenModal = () => {
    dispatch(modalAction.openState());
  };
  const handleCloseModal = () => {
    dispatch(modalAction.closeState());
  };

  return (
    <>
      <button className="btn-open-add-modal" onClick={handleOpenModal}>
        추가버튼
      </button>
      {showModal && <AddModal onCloseModal={handleCloseModal} />}
      {/* 이벤트를 전달할때는 handle 말고 on 사용하기 */}
      <Date />
      <List />
    </>
  );
};

export default MainPage;
