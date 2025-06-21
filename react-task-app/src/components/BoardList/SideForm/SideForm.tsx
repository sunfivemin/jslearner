import React, { useEffect, useRef, useState, type ChangeEvent } from 'react';
import { FiCheck } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { addBoard } from '../../../store/slices/boardsSlice';
import { v4 as uuidv4 } from 'uuid';

type TSideFormProps = {
  setIsFormOpen: React.Dispatch<React.SetStateAction<boolean>>;
  inputRef: React.RefObject<HTMLInputElement>;
};

const SideForm: React.FC<TSideFormProps> = ({ setIsFormOpen }) => {
  const [inputText, setInputText] = useState('');
  const wrapperRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();

  // input에 포커스
  useEffect(() => {
    setTimeout(() => {
      inputRef.current?.focus();
    }, 0);
  }, [inputRef]);

  // 외부 클릭 시 폼 닫기
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(e.target as Node)
      ) {
        setIsFormOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [setIsFormOpen]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const handleSubmit = () => {
    const trimmed = inputText.trim();
    if (!trimmed) return;

    // ✅ Redux에 게시판 추가
    dispatch(
      addBoard({
        board: {
          boardId: uuidv4(),
          boardName: trimmed,
          boardDescription: '', // ✅ 기본값으로 빈 문자열 또는 설명 추가
          lists: [],
        },
      })
    );

    setInputText('');
    setIsFormOpen(false);
  };

  return (
    <div
      ref={wrapperRef}
      style={{ display: 'flex', alignItems: 'center', gap: 8 }}
    >
      <input
        ref={inputRef}
        type="text"
        placeholder="새로운 게시판 등록하기"
        value={inputText}
        onChange={handleChange}
        onKeyDown={e => {
          if (e.key === 'Enter') handleSubmit();
        }}
      />
      <FiCheck
        size={20}
        style={{ cursor: 'pointer' }}
        onClick={handleSubmit}
        title="등록"
      />
    </div>
  );
};

export default SideForm;
