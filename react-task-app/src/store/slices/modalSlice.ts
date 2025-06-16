import { createSlice } from '@reduxjs/toolkit';
import type { ITesk } from '../../types';

type TModalState = {
  boardId: string;
  listId: string;
  task: ITesk;
};

const initialState: TModalState = {
  boardId: 'board-0',
  listId: 'list-0',
  task: {
    taskId: 'task-0',
    taskName: 'Task 0',
    taskDescription: 'This is task 0',
    taskOwner: 'Min',
  },
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {},
});

export const modalReducer = modalSlice.reducer;
