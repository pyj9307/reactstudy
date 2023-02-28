import './App.css';
import TodoTemplate from './components/TodoTemplate.js';
import TodoInsert from './components/TodoInsert.js';
import TodoList from './components/TodoList.js';
import {useState, useRef, useCallback} from 'react';

function App() {
  const [todos, setTodos] = useState([
    {id: 1, text : '리액트의 기초 알아보기', checked: true},
    {id: 2, text : '컴포넌트 스타일링 해보기', checked: false},
    {id: 3, text : '일정 관리 앱 만들어 보기', checked: true}
  ]);

  const nextId = useRef(todos.length+1);
  // 고유한 값을 저장할 때 사용
  const onInsert = useCallback(
    (inputText) => {
      const todo = {id: nextId.current, text: inputText, checked: false}
      // todos.push() 사용 불가.
      setTodos(todos.concat(todo));
      // 왼쪽항과 오른쪽항을 더해서 왼쪽항에 저장한다.
      // nextId.current = nextId.current+1;
      nextId.current += 1;
    },[todos] // useCallback 함수안에서 사용하는 state또는 props가 있다면 배열로 반드시 지정해야 최신 상태값을 보장할 수 있다.
  );

  // 삭제 기능 구현
  // 배열.filter() : filter함수 내부에서 테스트소스코드를 통해 통과된 항목들만 모아서 새롭게 배열을 구성한다.
  // 파라미터로 받은  id값과 todo(todos안에 저장된 개별항목)의 id값이 일치하지 않는 항목만 모아서 새로운 배열을 구성한다.
  const onRemove = useCallback(
    (id)=>{
      setTodos(todos.filter(
        (todo) => todo.id !== id
      ))
    },[todos]
  );

  return (
    <TodoTemplate>
      {/* Todo App을 만들자. */}
      <TodoInsert onInsert={onInsert}/>
      <TodoList todos={todos} onRemove={onRemove}/>
      </TodoTemplate>
  );
}

export default App;
