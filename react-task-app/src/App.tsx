import { useState } from 'react';
import {
  appContainer,
  board,
  buttons,
  deleteBoardButton,
  loggerButton,
} from './App.css.ts';
import BoardList from './components/BoardList/BoardList';
import ListContainer from './components/ListsContainer/ListsContainer';
import { useTypedDispatch, useTypedSelector } from './hooks/redux';
import EditModal from './components/EditModal/EditModal';
import LoggerModal from './components/LoggerModal/LoggerModal';
import { deleteBoard, sort } from './store/slices/boardsSlice';
import { addLog } from './store/slices/loggerSlice';
import { v4 } from 'uuid';
import { DragDropContext, type DropResult } from '@hello-pangea/dnd';

function App() {
  const [activeBoardId, setActiveBoardId] = useState('board-0');
  const [isLoggerOpen, setLoggerOpen] = useState(false);

  const boards = useTypedSelector(state => state.boards.boardArray);
  const modalActive = useTypedSelector(state => state.boards.modalActive);
  const dispatch = useTypedDispatch();

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

  const handleDragEnd = (result: DropResult) => {
    const { destination, source, draggableId } = result;

    if (!destination) return;

    const sourceList = lists.find(list => list.listId === source.droppableId);
    const destinationList = lists.find(
      list => list.listId === destination.droppableId
    );
    const task = sourceList?.tasks.find(t => t.taskId === draggableId);

    if (!sourceList || !destinationList || !task) return;

    dispatch(
      sort({
        boardIndex: boards.findIndex(board => board.boardId === activeBoardId),
        droppableIdStart: source.droppableId,
        droppableIdEnd: destination.droppableId,
        droppableIndexStart: source.index,
        droppableIndexEnd: destination.index,
        draggableId,
      })
    );

    dispatch(
      addLog({
        logId: v4(),
        logMessage: `리스트 '${sourceList.listName}' 에서 리스트 '${destinationList.listName}'으로 '${task.taskName}'을 옮김`,
        logAuthor: 'User',
        logTimestamp: String(Date.now()),
      })
    );
  };

  return (
    <>
      <div className={appContainer}>
        {modalActive ? <EditModal /> : null}
        {isLoggerOpen ? <LoggerModal setLoggerOpen={setLoggerOpen} /> : null}
        <BoardList
          activeBoardId={activeBoardId}
          setActiveBoardId={setActiveBoardId}
        />
        <div className={board}>
          <DragDropContext onDragEnd={handleDragEnd}>
            <ListContainer lists={lists} boardId={getActiveBoard.boardId} />
          </DragDropContext>
        </div>
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
    </>
  );
}

export default App;
