import { useSelector, type TypedUseSelectorHook } from 'react-redux';
import { useDispatch } from 'react-redux';
import type { AppDispatch, RootState } from '../store';

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useTypedDispatch = () => useDispatch<AppDispatch>();
