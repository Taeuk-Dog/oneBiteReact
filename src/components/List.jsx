import './List.css'
import TodoItem from './TodoItem';
import { useState } from 'react';

const List = ({todos, onUpdate, onDelete}) =>{
    const [search, setSearch] = useState('');

    const onChangeSearch = (e) =>{
        setSearch(e.target.value);
    }

    const getFilterData = () =>{
        if(search ===""){
            return todos;
        }
        return todos.filter((todo) =>
            todo.content.toLowerCase().includes(search.toLowerCase()))
    }
    
    const filteredTodos = getFilterData();
    return (
        <div className='List'>
            <h1>Todo List</h1>
            <input 
            value={search}
            onChange={onChangeSearch}
            placeholder="검색어를 입력하세요" />
            <div className='todos_wrapper'>
                {filteredTodos .map((todo)=>{
                    return <TodoItem key={todo.id} {...todo} onUpdate={onUpdate} onDelete={onDelete}/>
                })}
            </div>  
        </div>
    )
}

export default List;