import './TodoItem.css';
const TodoItem = ({id, isDone, content, date, onUpdate, onDelete }) =>{

    const onChangeCheckbox = () =>{
        onUpdate(id);
    }

    const onClickDeleteButton = () =>{
        onDelete(id); 
    }
    return (
        <div className="TodoItem">
            <input 
            onChange={onChangeCheckbox}
            checked={isDone} type="checkbox"></input>
            <div className="content">{content}</div>
            <div className="Date">{new Date(date).toLocaleDateString()}</div>
            <button onClick={onClickDeleteButton}>삭제</button>
        </div>
    )
}

export default TodoItem;