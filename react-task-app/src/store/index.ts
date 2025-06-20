import { configureStore } from '@reduxjs/toolkit';
import { boardsReducer } from './slices/boardsSlice';
import { loggerReducer } from './slices/loggerSlice';
import { modalReducer } from './slices/modalSlice';

export const store = configureStore({
  reducer: {
    boards: boardsReducer,
    logger: loggerReducer,
    modal: modalReducer,
  },
  devTools: process.env.NODE_ENV !== 'production', // 개발 모드에서만 DevTools 활성화
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
