import { useTypedSelector } from './redux';

type TAuthResult = {
  isAuth: boolean;
  email: string;
  id: string;
};

export function useAuth(): TAuthResult {
  const { id, email } = useTypedSelector(state => state.user);

  return {
    isAuth: !!email,
    email,
    id,
  };
}
