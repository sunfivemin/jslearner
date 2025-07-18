import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { ITask } from '../../types';

type TSetModalDetaAction = {
  boardId: string;
  listId: string;
  task: ITask;
};

type TModalState = {
  boardId: string;
  listId: string;
  task: ITask;
};

const initialState: TModalState = {
  boardId: 'board-0',
  listId: 'list-0',
  task: {
    taskId: 'task-0',
    taskName: 'task-0',
    taskDescription: 'task description',
    taskOwner: 'John',
  },
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setModalData: (state, { payload }: PayloadAction<TSetModalDetaAction>) => {
      state.boardId = payload.boardId;
      state.listId = payload.listId;
      state.task = payload.task;
    },
  },
});

export const modalReducer = modalSlice.reducer;
export const { setModalData } = modalSlice.actions;
