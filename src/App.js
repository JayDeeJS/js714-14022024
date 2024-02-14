import { useEffect, useState } from 'react';
import './App.css';
import TodoListPage from './pages/TodoListPage/TodoListPage';

function App() {

  const [modal, setModal] = useState(false);
  const [todoList, setTodoList] = useState([]);
  const [titleValue, setTitleValue] = useState('');
  const [contentValue, setContentValue] = useState('');

  useEffect(() => {
    if (todoList.length === 0) return;
    localStorage.setItem('todo', JSON.stringify(todoList));
  }, [todoList])

  useEffect(() => {
    const todoList = JSON.parse(localStorage.getItem('todo'));
    if (todoList) setTodoList(todoList);
  }, [])

  return (
    <main className="App">
      <TodoListPage
        modal={modal}
        setModal={setModal}
        todoList={todoList}
        setTodoList={setTodoList}
        titleValue={titleValue}
        setTitleValue={setTitleValue}
        contentValue={contentValue}
        setContentValue={setContentValue}
      />
    </main>
  );
}

export default App;