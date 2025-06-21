import React, { useRef, useState } from 'react';
import type { FC } from 'react';
import { useTypedDispatch, useTypedSelector } from '../../hooks/redux';
import SideForm from './SideForm/SideForm';
import { FiPlusCircle } from 'react-icons/fi';
import { FaGoogle, FaSignOutAlt } from 'react-icons/fa';
import {
  addButton,
  addSection,
  boardItem,
  boardItemActive,
  container,
  title,
} from './BoardList.css';
import clsx from 'clsx';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { app } from '../../firebase';
import { removeUser, setUser } from '../../store/slices/userSilce';
import { useAuth } from '../../hooks/useAuth';

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
  const inputRef = useRef<HTMLInputElement>(null!);

  const dispatch = useTypedDispatch();
  const { isAuth } = useAuth();

  const handleClick = () => {
    setIsFormOpen(!isFormOpen);
    setTimeout(() => {
      inputRef.current?.focus();
    }, 0);
  };

  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const handleLogin = () => {
    signInWithPopup(auth, provider)
      .then(userCredential => {
        console.log(userCredential);
        dispatch(
          setUser({
            email: userCredential.user.email,
            id: userCredential.user.uid,
          })
        );
      })
      .catch(err => {
        console.error(err);
      });
  };
  const handleLogOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
      })
      .catch(err => console.error(err));
  };

  return (
    <div className={container}>
      <div className={title}>게시판 :</div>
      {boardArray.map(board => (
        <div
          key={board.boardId}
          onClick={() => setActiveBoardId(board.boardId)}
          className={clsx(boardItem, {
            [boardItemActive]: board.boardId === activeBoardId,
          })}
        >
          <div>{board.boardName}</div>
        </div>
      ))}
      <div className={addSection}>
        {isFormOpen ? (
          <SideForm inputRef={inputRef} setIsFormOpen={setIsFormOpen} />
        ) : (
          <FiPlusCircle className={addButton} onClick={handleClick} />
        )}
        {isAuth ? (
          <FaSignOutAlt className={addButton} onClick={handleLogOut} />
        ) : (
          <FaGoogle className={addButton} onClick={handleLogin} />
          //FaSignInAlt
        )}
      </div>
    </div>
  );
};

export default BoardList;
