import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { ILogItem } from '../../types';

type LoggerState = {
  logArray: ILogItem[];
};

const initialState: LoggerState = {
  logArray: [],
};

const loggerSlice = createSlice({
  name: 'logger',
  initialState,
  reducers: {
    addLog: (state, action: PayloadAction<ILogItem>) => {
      state.logArray.push(action.payload);
    },
  },
});

export const { addLog } = loggerSlice.actions;
export const loggerReducer = loggerSlice.reducer;
