import React, { useState, type FC } from 'react';
import { useTypedSelector } from '../../hooks/redux';
import type { IBoard } from '../../types';
import SideForm from './SideForm/SideForm';
import { FiPlusCircle } from 'react-icons/fi';
import {
  addSection,
  boardItem,
  boardItemActive,
  container,
  title,
} from './BoardList.css';
import clsx from 'clsx';

type TBoardListProps = {
  activeBoardId: string;
  setActiveBoardId: React.Dispatch<React.SetStateAction<string>>;
};

const BoardList: FC<TBoardListProps> = ({
  activeBoardId,
  setActiveBoardId,
}) => {
  const boardArray = useTypedSelector(state => state.boards.boardArray);
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <div className={container}>
      <p className={title}>게시판</p>
      <ul
        style={{ display: 'flex', gap: '10px', padding: 0, listStyle: 'none' }}
      >
        {boardArray.map((board: IBoard) => (
          <li
            key={board.boardId}
            onClick={() => setActiveBoardId(board.boardId)}
            className={clsx(boardItem, {
              [boardItemActive]: board.boardId === activeBoardId,
            })}
          >
            {board.boardName}
          </li>
        ))}
      </ul>
      <div className={addSection}>
        {isFormOpen ? (
          <SideForm setIsFormOpen={setIsFormOpen} />
        ) : (
          <FiPlusCircle
            size={24}
            style={{ cursor: 'pointer' }}
            onClick={() => setIsFormOpen(!isFormOpen)}
          />
        )}
      </div>
    </div>
  );
};

export default BoardList;
