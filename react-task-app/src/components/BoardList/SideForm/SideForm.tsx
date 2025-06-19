// src/components/BoardList/SideForm/SideForm.tsx

import React from 'react';

type TSideFormProps = {
  setIsFormOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const SideForm: React.FC<TSideFormProps> = ({ setIsFormOpen }) => {
  return (
    <div>
      <p>사이드 폼</p>
      <button onClick={() => setIsFormOpen(false)}>닫기</button>
    </div>
  );
};

export default SideForm;
