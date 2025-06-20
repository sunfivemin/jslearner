import React, { useState, type ChangeEvent, type FC } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { useTypedDispatch } from '../../../hooks/redux';
import { addList, addTask } from '../../../store/slices/boardsSlice';
import { v4 } from 'uuid';
import { addLog } from '../../../store/slices/loggerSlice';
import {
  button,
  buttons,
  input,
  listForm,
  taskForm,
  close,
} from './DropDownForm.css';

type TDropDownFormProps = {
  boardId: string;
  listId: string;
  setIsFormOpen: React.Dispatch<React.SetStateAction<boolean>>;
  list?: boolean;
};
const DropdownForm: FC<TDropDownFormProps> = ({
  boardId,
  list,
  listId,
  setIsFormOpen,
}) => {
  const dispatch = useTypedDispatch();
  const [text, setText] = useState('');
  const formPlaceholder = list
    ? '리스트의 제목을 입력하세요'
    : '일의 제목을 입력하세요';
  const handleTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };
  const buttonTitle = list ? '리스트 추가하기' : '일 추가하기';
  const handleButtonClick = () => {
    if (text) {
      if (list) {
        dispatch(
          addList({
            boardId,
            list: { listId: v4(), listName: text, tasks: [] },
          })
        );
        dispatch(
          addLog({
            logId: v4(),
            logMessage: `로그 생성하기: ${text}`,
            logAuthor: 'User',
            logTimestamp: String(Date.now()),
          })
        );
      } else {
        dispatch(
          addTask({
            boardId,
            listId,
            task: {
              taskId: v4(),
              taskName: text,
              taskDescription: '',
              taskOwner: 'User',
            },
          })
        );
        dispatch(
          addLog({
            logId: v4(),
            logMessage: `일 생성하기: ${text}`,
            logAuthor: 'User',
            logTimestamp: String(Date.now()),
          })
        );
      }
    }
  };
  return (
    <div className={list ? listForm : taskForm}>
      <textarea
        className={input}
        value={text}
        onChange={handleTextChange}
        onBlur={() => setIsFormOpen(false)}
        autoFocus
        placeholder={formPlaceholder}
      />
      <div className={buttons}>
        <button className={button} onMouseDown={handleButtonClick}>
          {buttonTitle}
        </button>
        <AiOutlineClose className={close} />
      </div>
    </div>
  );
};

export default DropdownForm;
