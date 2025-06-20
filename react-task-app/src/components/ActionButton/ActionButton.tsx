import { useState, type FC } from 'react';
import DropdownForm from './DropDownForm/DropDownForm';
import { IoIosAdd } from 'react-icons/io';
import { listButton, taskButton } from './ActionButton.css';

type TActionButtonProps = {
  boardId: string;
  listId: string;
  list?: boolean;
};

const ActionButton: FC<TActionButtonProps> = ({ boardId, listId, list }) => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const buttonText = list ? '새로운 리스트 등록' : '새로운 일 등록';

  if (isFormOpen) {
    return (
      <DropdownForm
        setIsFormOpen={setIsFormOpen}
        list={!!list}
        boardId={boardId}
        listId={listId}
      />
    );
  }

  return (
    <div
      className={list ? listButton : taskButton}
      onClick={() => setIsFormOpen(true)}
    >
      <IoIosAdd />
      <p>{buttonText}</p>
    </div>
  );
};

export default ActionButton;
