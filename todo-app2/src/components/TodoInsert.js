import './TodoInsert.css';
import {MdAdd} from 'react-icons/md';
import {useState, useCallback} from 'react';

const TodoInsert = (props)=>{
    const [value, setValue] = useState('');

    const onChange = useCallback((e)=>{
        //컴포넌트가 렌더링 될 때마다 생성하지 않고 재사용
        setValue(e.target.value);
    });

    const onSubmit = useCallback((e)=>{
        props.onInsert(value);
        setValue('');
        e.preventDefault();
    },[value]);

    return(
        <form className='TodoInsert' onSubmit={onSubmit}>
            <input placeholder='할일을 입력하세요.' value={value}
                onChange={onChange}/>
            <button type='submit'>
                <MdAdd />
            </button>
        </form>
    );
}

export default TodoInsert;