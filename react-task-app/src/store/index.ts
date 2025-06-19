import { configureStore } from '@reduxjs/toolkit';
import { boardsReducer } from './slices/boardsSlice';

export const store = configureStore({
  reducer: {
    boards: boardsReducer,
  },
  devTools: process.env.NODE_ENV !== 'production', // 개발 모드에서만 DevTools 활성화
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
