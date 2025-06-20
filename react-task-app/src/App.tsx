import { useState } from 'react';
import { useTypedSelector } from './hooks/redux.ts';
import './App.css.ts';
import {
  appContainer,
  board,
  buttons,
  deleteBoardButton,
  loggerButton,
} from './App.css.ts';
import BoardList from './components/BoardList/BoardList.tsx';
import ListContainer from './components/ListsContainer/ListsContainer.tsx';
import EditModal from './components/EditModal/EditModal.tsx';
import LoggerModal from './components/LoggerModal/LoggerModal.tsx';

function App() {
  const [activeBoardId, setActiveBoardId] = useState('board-0');
  const [isLoggerOpen, setLoggerOpen] = useState(false);
  const modalActive = useTypedSelector(state => state.boards.modalActive);
  const boards = useTypedSelector(state => state.boards.boardArray);

  const getActiveBoard = boards.filter(
    board => board.boardId === activeBoardId
  )[0];

  const lists = getActiveBoard.lists;

  return (
    <div className={appContainer}>
      {modalActive ? <EditModal /> : null}
      {isLoggerOpen ? <LoggerModal setLoggerOpen={setLoggerOpen} /> : null}
      <BoardList
        activeBoardId={activeBoardId}
        setActiveBoardId={setActiveBoardId}
      />
      <div className={board}>
        <ListContainer lists={lists} boardId={getActiveBoard.boardId} />
      </div>
      <div className={board}></div>

      <div className={buttons}>
        <button className={deleteBoardButton}>이 게시판 삭제하기</button>
        <button
          className={loggerButton}
          onClick={() => setLoggerOpen(!isLoggerOpen)}
        >
          {isLoggerOpen ? '활동 목록 숨기기' : '활동 목록 보이기'}
        </button>
      </div>
    </div>
  );
}

export default App;
