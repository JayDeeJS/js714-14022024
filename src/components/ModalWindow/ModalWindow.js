import ModalWrapper from './ModalWrapper';
import cls from './modalWindow.module.css';

const Modal = ({ setModal, todoList, setTodoList, titleValue, setTitleValue, contentValue, setContentValue }) => {

    const handleCloseModal = () => {
        setModal(false)
    }

    const handleBubbling = (e) => {
        e.stopPropagation();
    }

    const readTitleValue = (e) => {
        setTitleValue(e.target.value);
        console.log(titleValue);
    }

    const readContentValue = (e) => {
        setContentValue(e.target.value);
        console.log(contentValue);
    }

    const handleSave = () => {
        if (titleValue.trim() === '' || contentValue.trim() === '') {
            alert('Добавьте значения');
        } else {
            let id = 1;
            if (todoList.length > 0) {
                id = todoList[todoList.length - 1].id + 1;
            }
            const newTodoList = [...todoList, { id, title: titleValue, content: contentValue }]
            setTodoList(newTodoList);
            setModal(false);
            setTitleValue('');
            setContentValue('');
        }
    }

    return (
        <ModalWrapper>
            <div className={cls.wrapper} onClick={handleCloseModal}>
                <div className={cls.window} onClick={handleBubbling}>
                    <input value={titleValue} onChange={readTitleValue} type="text" placeholder='title...' />
                    <input value={contentValue} onChange={readContentValue} type="text" placeholder='content...' />
                    <button onClick={handleSave}>Save Todo</button>
                </div>
            </div>
        </ModalWrapper>
    )
};

export default Modal;