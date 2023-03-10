import React from 'react';
import { MdCheckBoxOutlineBlank, MdRemoveCircleOutline, MdCheckBox } from 'react-icons/md';
import './TodoListItem.css';

const TodoListItem = (props) => {
    // 부모컴포넌트(TodoList.js)에서 전달받은 todo데이터에는 text, checked 데이터가 들어있을 예정
    // props.todo에는 id, text, checked값이 있는데 todo의 데이터 형태를 그대로 저장해주기 위해서
    // {id, text,checked}로 변수를 선언하면 해당하는 변수에 자동으로 저장된다.
    const { id, text, checked } = props.todo;
    return (
        <div className='TodoListItem'>
            <div className={checked ? 'checkbox checked' : 'checkbox'} onClick={()=>props.onToggle(id)}>
                {/* <MdCheckBoxOutlineBlank/> */}
                {checked ? <MdCheckBox/> : <MdCheckBoxOutlineBlank/>}
                <div className='text'>{text}</div>
            </div>
            <div className='remove' onClick={()=>{
                props.onRemove(id);     
            }}>
            <MdRemoveCircleOutline />
        </div>
    </div>
    )
}

// export default TodoListItem; -> 단순히 TodoListItem컴포넌트만 익스포트
export default React.memo(TodoListItem); // 이전 props와 현재 props를 비교해서 변경사항이 있을때만 리랜더링