import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState<string[]>([]);
  const [input, setInput] = useState('');
  const name = '선오';

  const addTodo = () => {
    if (input.trim() === '') return;
    setTodos([...todos, input]);
    setInput('');
  };

  return (
    <div className="test">
      {/* 삼항 조건문 예시 */}
      <h1>{name === '선오' ? <p>SUNFIVE</p> : <p>MY</p>} Todo List</h1>

      {/* fallback 방식 1 */}
      <p>listItem: {todos[0] || '리스트 항목 없음'}</p>

      {/* fallback 방식 2 (삼항 조건문) */}
      <p>
        listItem:
        {todos.length === 0
          ? '할 일이 없습니다.'
          : `${todos[todos.length - 1]} / 총 ${todos.length}개 등록됨`}
      </p>

      <input
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="할 일을 입력하세요"
      />
      <button onClick={addTodo}>추가</button>

      <ul>
        {todos.length === 0 ? (
          <li>할일을 입력해주세요.</li>
        ) : (
          todos.map((todo, idx) => <li key={idx}>{todo}</li>)
        )}
      </ul>
    </div>
  );
}

export default App;
