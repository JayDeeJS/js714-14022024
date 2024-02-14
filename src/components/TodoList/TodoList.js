import cls from './todoList.module.css';

const TodoList = ({ todo, todoList, setTodoList }) => {

    const handleDelete = (id) => {
        const filtered = todoList.filter((todo) => todo.id !== id);
        setTodoList(filtered);
    }

    return (
        <section className={cls.card}>
            <p>{todo.title}</p>
            <p>{todo.content}</p>
            <button onClick={() => handleDelete(todo.id)}>Delete Todo</button>
        </section>
    )
};

export default TodoList;