import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { IBoard, IList, ITask } from '../../types';

type TBoardsState = {
  modalActive: boolean;
  boardArray: IBoard[];
};

type TAddBoardAction = {
  board: IBoard;
};

type TDeleteBoardAction = {
  boardId: string;
};

type TDelecteAction = {
  boardId: string;
  listId: string;
};

type TAddListAction = {
  boardId: string;
  list: IList;
};

type TAddTaskAction = {
  boardId: string;
  listId: string;
  task: ITask;
};

type TDeleteTaskAction = {
  boardId: string;
  listId: string;
  taskId: string;
};

type TSortAction = {
  boardIndex: number;
  droppableIdStart: string;
  droppableIdEnd: string;
  droppableIndexStart: number;
  droppableIndexEnd: number;
  draggableId: string;
};

const initialState: TBoardsState = {
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
  reducers: {
    addBoard: (state, { payload }: PayloadAction<TAddBoardAction>) => {
      state.boardArray.push(payload.board);
    },

    deleteBoard: (state, { payload }: PayloadAction<TDeleteBoardAction>) => {
      state.boardArray = state.boardArray.filter(
        board => board.boardId !== payload.boardId
      );
    },

    addList: (state, { payload }: PayloadAction<TAddListAction>) => {
      state.boardArray.map(board =>
        board.boardId === payload.boardId
          ? { ...board, list: board.lists.push(payload.list) }
          : board
      );
    },

    addTask: (state, { payload }: PayloadAction<TAddTaskAction>) => {
      state.boardArray.map(board =>
        board.boardId === payload.boardId
          ? {
              ...board,
              lists: board.lists.map(list =>
                list.listId === payload.listId
                  ? {
                      ...list,
                      tasks: list.tasks.push(payload.task),
                    }
                  : list
              ),
            }
          : board
      );
    },

    deleteList: (state, { payload }: PayloadAction<TDelecteAction>) => {
      state.boardArray = state.boardArray.map(board =>
        board.boardId === payload.boardId
          ? {
              ...board,
              lists: board.lists.filter(list => list.listId !== payload.listId),
            }
          : board
      );
    },

    setModalActive: (state, { payload }: PayloadAction<boolean>) => {
      state.modalActive = payload;
    },

    updateTask: (state, { payload }: PayloadAction<TAddTaskAction>) => {
      state.boardArray = state.boardArray.map(board =>
        board.boardId === payload.boardId
          ? {
              ...board,
              lists: board.lists.map(list =>
                list.listId === payload.listId
                  ? {
                      ...list,
                      tasks: list.tasks.map(task =>
                        task.taskId === payload.task.taskId
                          ? payload.task
                          : task
                      ),
                    }
                  : list
              ),
            }
          : board
      );
    },

    deleteTask: (state, { payload }: PayloadAction<TDeleteTaskAction>) => {
      state.boardArray = state.boardArray.map(board =>
        board.boardId === payload.boardId
          ? {
              ...board,
              lists: board.lists.map(list =>
                list.listId === payload.listId
                  ? {
                      ...list,
                      tasks: list.tasks.filter(
                        task => task.taskId !== payload.taskId
                      ),
                    }
                  : list
              ),
            }
          : board
      );
    },

    sort: (state, { payload }: PayloadAction<TSortAction>) => {
      const board = state.boardArray[payload.boardIndex];

      if (payload.droppableIdStart === payload.droppableIdEnd) {
        // 같은 리스트 내 이동
        const list = board.lists.find(
          list => list.listId === payload.droppableIdStart
        );
        if (list) {
          const dragged = list.tasks.splice(payload.droppableIndexStart, 1)[0];
          list.tasks.splice(payload.droppableIndexEnd, 0, dragged);
        }
      } else {
        // 다른 리스트 간 이동
        const sourceList = board.lists.find(
          list => list.listId === payload.droppableIdStart
        );
        const destList = board.lists.find(
          list => list.listId === payload.droppableIdEnd
        );

        if (sourceList && destList) {
          const dragged = sourceList.tasks.splice(
            payload.droppableIndexStart,
            1
          )[0];
          destList.tasks.splice(payload.droppableIndexEnd, 0, dragged);
        }
      }
    },
  },
});

export const boardsReducer = boardsSlice.reducer;
export const {
  addBoard,
  deleteBoard,
  deleteList,
  setModalActive,
  addTask,
  addList,
  updateTask,
  deleteTask,
  sort,
} = boardsSlice.actions;
