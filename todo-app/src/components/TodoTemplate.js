import React from 'react';
import './TodoTemplate.css';

function TodoTemplate({ children }) {
    return (
        <div className='TodoTemplate'>
            <div className='app-title'>일정 관리</div>
            <div className='content'>{children}</div>
            {/* 부모 컴포넌트에서 현재(자식) 컴포넌트를 호출할 때 태그 사이에 넣은 문자열
            App.js -> <TodoTemplate>문자열</TodoTemplate>
                    -> 문자열이 children이라고 하는 매개변수에 담겨져서 전달된다. */}
        </div>
    );
}

export default TodoTemplate;