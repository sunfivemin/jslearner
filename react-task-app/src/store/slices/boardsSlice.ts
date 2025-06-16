import { createSlice } from '@reduxjs/toolkit';
import type { IBoard } from '../../types';

type TBoardState = {
  modalActive: boolean;
  boardArray: IBoard[];
};

const initialState: TBoardState = {
  modalActive: false,
  boardArray: [
    {
      boardId: 'board-0',
      boardName: 'Board 0',
      boardDescription: 'This is board 0',
      lists: [
        {
          listId: 'list-0',
          listName: 'List 1',
          tasks: [
            {
              taskId: 'task-0',
              taskName: 'Task 1',
              taskDescription: 'This is task 1',
              taskOwner: 'Min',
            },
            {
              taskId: 'task-1',
              taskName: 'Task 2',
              taskDescription: 'This is task 2',
              taskOwner: 'Min',
            },
          ],
        },
      ],
    },
    {
      boardId: 'board-1',
      boardName: 'Board 1',
      boardDescription: 'This is board 1',
      lists: [
        {
          listId: 'list-1',
          listName: 'List 2',
          tasks: [
            {
              taskId: 'task-0',
              taskName: 'Task 1',
              taskDescription: 'This is task 1',
              taskOwner: 'Min',
            },
            {
              taskId: 'task-1',
              taskName: 'Task 2',
              taskDescription: 'This is task 2',
              taskOwner: 'Min',
            },
          ],
        },
      ],
    },
  ],
};

const boardsSlice = createSlice({
  name: 'boards',
  initialState,
  reducers: {},
});

export const boardsReducer = boardsSlice.reducer;
