import { useState } from 'react';
import Clock from './Timer';
import Modal from './Modal';

type Todo = {
  id: number;
  text: string;
  isChecked: boolean;
};

const Todolist = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState('');
  const [selectedTodo, setSelectedTodo] = useState<Todo | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const name = '선오';

  const addTodo = () => {
    if (input.trim() === '') return;
    const newTodo: Todo = {
      id: Date.now(),
      text: input,
      isChecked: false,
    };
    setTodos([...todos, newTodo]);
    setInput('');
  };

  const toggleCheck = (id: number) => {
    const updated = todos.map(todo =>
      todo.id === id ? { ...todo, isChecked: !todo.isChecked } : todo
    );
    setTodos(updated);
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const openDetailModal = (todo: Todo) => {
    setSelectedTodo(todo);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedTodo(null);
    setIsModalOpen(false);
  };

  return (
    <div className="test">
      <h1>{name === '선오' ? <p>SUNFIVE</p> : <p>MY</p>} Todo List</h1>

      {/* <p>listItem: {todos[0]?.text || '리스트 항목 없음'}</p> */}

      <div className="input-group">
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="할 일을 입력하세요"
        />
        <button onClick={addTodo}>추가</button>
      </div>

      <ul>
        {todos.length === 0 ? (
          <li>할일을 입력해주세요.</li>
        ) : (
          todos.map(todo => (
            <li key={todo.id} className={todo.isChecked ? 'completed' : ''}>
              <div className="todo-text" onClick={() => openDetailModal(todo)}>
                <input
                  type="checkbox"
                  checked={todo.isChecked}
                  onChange={() => toggleCheck(todo.id)}
                  onClick={e => e.stopPropagation()} // 이벤트 버블링 차단
                />
                {todo.text}
              </div>
              <button className="delete" onClick={() => deleteTodo(todo.id)}>
                삭제
              </button>
            </li>
          ))
        )}
      </ul>

      <Clock />

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2>할일 상세 정보</h2>
        {selectedTodo && (
          <>
            <p>텍스트: {selectedTodo.text}</p>
            <p>체크 여부: {selectedTodo.isChecked ? '완료' : '미완료'}</p>
          </>
        )}
      </Modal>
    </div>
  );
};

export default Todolist;
