import './App.css';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import {useState, useRef, useCallback} from 'react';

function App() {
  const [todos, setTodos] = useState([
    {id: 1, text : '리액트의 기초 알아보기', checked: true},
    {id: 2, text : '컴포넌트 스타일링 해보기', checked: false},
    {id: 3, text : '일정 관리 앱 만들어 보기', checked: true}
  ]);

  const nextId = useRef(todos.length+1);
  //고유한 값을 저장할때 사용
  const onInsert = useCallback(
    (inputText) => {
      const todo = {id: nextId.current , text: inputText, checked: false}
      // todos.push() 사용 불가
      setTodos(todos.concat(todo));
      // 왼쪽항과 오른쪽항을 더해서 왼쪽항에 저장한다.
      // nextId.current = nextId.current+1;
      nextId.current += 1;
    }, [todos] //useCallback 함수안에서 사용하는 state또는 props가 있다면
    // 배열로 반드시 지정해야 최신 상태값을 보장 할수있다.
  );
  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert}/>
      <TodoList todos={todos}/>
    </TodoTemplate>
  );
}

export default App;
