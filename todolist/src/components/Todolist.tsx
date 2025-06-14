import { useState } from 'react';
import Clock from './Timer';

type Todo = {
  id: number;
  text: string;
  isChecked: boolean;
};

const Todolist = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState('');
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

  return (
    <div className="test">
      <h1>{name === '선오' ? <p>SUNFIVE</p> : <p>MY</p>} Todo List</h1>

      <p>listItem: {todos[0]?.text || '리스트 항목 없음'}</p>

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
              <div className="todo-text">
                <input
                  type="checkbox"
                  checked={todo.isChecked}
                  onChange={() => toggleCheck(todo.id)}
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
    </div>
  );
};

export default Todolist;
