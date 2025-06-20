import React, { type FC } from 'react';
import { useTypedSelector } from '../../hooks/redux';
import { AiOutlineClose } from 'react-icons/ai';
import LogItem from './LogItem/LogItem';
import {
  body,
  closeButton,
  header,
  modalWindow,
  title,
  wrapper,
} from './LoggerModal.css';

type TLoggerModalProps = {
  setLoggerOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const LoggerModal: FC<TLoggerModalProps> = ({ setLoggerOpen }) => {
  const logs = useTypedSelector(state => state.logger.logArray);

  return (
    <div className={wrapper}>
      <div className={modalWindow}>
        <div className={header}>
          <div className={title}>활동 기록</div>
          <AiOutlineClose
            className={closeButton}
            onClick={() => setLoggerOpen(false)}
          />
        </div>
        <div className={body}>
          {logs.length === 0
            ? '활동기록이 없습니다.'
            : logs.map(log => <LogItem key={log.logId} />)}
        </div>
      </div>
    </div>
  );
};

export default LoggerModal;
