import cls from './todoListPage.module.css';
import ModalWindow from '../../components/ModalWindow/ModalWindow';
import TodoList from '../../components/TodoList/TodoList';

const TodoListPage = ({ modal, setModal, todoList, setTodoList, titleValue, setTitleValue, contentValue, setContentValue }) => {
    
    const handleModal = () => {
        setModal(!modal)
        console.log(modal);
    }

    return (
        <section className={cls.wrapper}>
            <button onClick={handleModal}>Create Todo</button>
            <div className={cls.flex}>
                {
                    todoList.length === 0
                    ? <p>TodoList is empty</p>
                    : todoList.map((todo) =>
                        <TodoList todo={todo} todoList={todoList} setTodoList={setTodoList} />
                    )
                }
            </div>

            {modal && (<ModalWindow
                        setModal={setModal}
                        todoList={todoList}
                        setTodoList={setTodoList}
                        titleValue={titleValue}
                        setTitleValue={setTitleValue}
                        contentValue={contentValue}
                        setContentValue={setContentValue}
                      />)}
        </section>
    )
};

export default TodoListPage;