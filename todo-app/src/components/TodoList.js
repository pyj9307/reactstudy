import React from 'react';
import './TodoList.css';
import TodoListItem from './TodoListItem';

const TodoList = (props)=>{
    //부모 컴포넌트에서 todos라는 이름으로 할일 목록 배열 데이터를 전달받아서,
    // TodoListItem을 todos데이터의 크기(배열의 갯수)만큼 생성한다.
    const list = [];
    for(let i=0; i < props.todos.length; i++){
        list.push(
            <TodoListItem todo={props.todos[i]} key={props.todos[i].id} onRemove={props.onRemove}/>
        );
    }
    return(
        <div className='TodoList'>
            {list}
            {/* <TodoListItem />
            <TodoListItem />
            <TodoListItem /> */}
        </div>
    );
}

export default TodoList;

