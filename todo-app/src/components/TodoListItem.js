import React from 'react';
import { MdCheckBoxOutlineBlank, MdRemoveCircleOutline, MdCheckBox } from 'react-icons/md';
import './TodoListItem.css';

const TodoListItem = (props) => {
    // 부모컴포넌트(TodoList.js)에서 전달받은 todo데이터에는 text, checked 데이터가 들어있을 예정
    const { text, checked } = props.todo;
    return (
        <div className='TodoListItem'>
            <div className={checked ? 'checkbox checked' : 'checkbox'}>
                {/* <MdCheckBoxOutlineBlank/> */}
                {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
                <div className='test'>{text}</div>
            </div>
            <div className='remove'>
                <MdRemoveCircleOutline />
            </div>
        </div>
    )
}

export default TodoListItem;