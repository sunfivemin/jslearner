import { useState } from 'react';
import { useTypedDispatch, useTypedSelector } from './hooks/redux.ts';
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
import { deleteBoard } from './store/slices/boardsSlice.ts';
import { addLog } from './store/slices/loggerSlice.ts';
import { v4 } from 'uuid';

function App() {
  const dispatch = useTypedDispatch();
  const [activeBoardId, setActiveBoardId] = useState('board-0');
  const [isLoggerOpen, setLoggerOpen] = useState(false);
  const modalActive = useTypedSelector(state => state.boards.modalActive);
  const boards = useTypedSelector(state => state.boards.boardArray);

  const getActiveBoard = boards.filter(
    board => board.boardId === activeBoardId
  )[0];

  const lists = getActiveBoard.lists;

  const handleDeleteBoard = () => {
    if (boards.length > 1) {
      dispatch(deleteBoard({ boardId: getActiveBoard.boardId }));
      dispatch(
        addLog({
          logId: v4(),
          logMessage: `게시판 지우기: ${getActiveBoard.boardName}`,
          logAuthor: 'User',
          logTimestamp: String(Date.now()),
        })
      );

      const newIndexToSet = () => {
        const indexToDeleted = boards.findIndex(
          board => board.boardId === activeBoardId
        );
        return indexToDeleted === 0 ? indexToDeleted + 1 : indexToDeleted - 1;
      };
      setActiveBoardId(boards[newIndexToSet()].boardId);
    } else {
      alert('최소 게시판 갯수는 한 개입니다.');
    }
  };

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
        <button className={deleteBoardButton} onClick={handleDeleteBoard}>
          이 게시판 삭제하기
        </button>
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
