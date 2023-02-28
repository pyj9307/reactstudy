import './App.css';
import TodoTemplate from './components/TodoTemplate.js';
import TodoInsert from './components/TodoInsert.js';
import TodoList from './components/TodoList.js';
import { useState, useRef, useCallback } from 'react';

// 데이터 2500개 생성하기
function createBulkTodos(){
  const array = [];
  for(let i =1; i <=2500; i++){
  array.push(
    {id : i, text : `할일 테스트 ${i}`, checked : false}
  );
  }
  return array;
}

function App() {
  // 더미데이터 3개만 생성
  // const [todos, setTodos] = useState([
  //   { id: 1, text: '리액트의 기초 알아보기', checked: true },
  //   { id: 2, text: '컴포넌트 스타일링 해보기', checked: false },
  //   { id: 3, text: '일정 관리 앱 만들어 보기', checked: true }
  // ]);

  // 더미데이터 2500개 생성해서 todos 상태값에 저장하기
  const [todos, setTodos] = useState(createBulkTodos());

  const nextId = useRef(todos.length + 1);
  // 고유한 값을 저장할 때 사용
  const onInsert = useCallback(
    (inputText) => {
      const todo = { id: nextId.current, text: inputText, checked: false }
      // todos.push() 사용 불가.
      setTodos(todos => todos.concat(todo));
      // 왼쪽항과 오른쪽항을 더해서 왼쪽항에 저장한다.
      // nextId.current = nextId.current+1;
      nextId.current += 1;
    }, [] // useCallback 함수안에서 사용하는 state또는 props가 있다면 배열로 반드시 지정해야 최신 상태값을 보장할 수 있다.
  );

  // 삭제 기능 구현
  // 배열.filter() : filter함수 내부에서 테스트소스코드를 통해 통과된 항목들만 모아서 새롭게 배열을 구성한다.
  // 파라미터로 받은 id값과 todo(todos안에 저장된 개별항목)의 id값이 일치하지 않는 항목만 모아서 새로운 배열을 구성한다.
  const onRemove = useCallback(
    (id) => {
      setTodos(todos => todos.filter( 
        (todo) => todo.id !== id
      ))
    }, []
  );

  // 일정 수정 기능 구현(onToggle)
  // 배열.map() : 배열을 순회하면서 요소마다 callback함수 적용 후 새로은 배열로 리턴해줌 -> 배열의 요소를 수정이 가능.(조건을 만족하지 않으면 수정이 가능)
  // 배열.filter() : 배열을 순회하면서 요소마다 조건 확인 후 조건을 만족하는 요소들로 구성된 배열을 리턴(조건을 만족하지 않으면 제거)
  // ...(전개연산자) : 배열이나 문자열과 같이 순회가 가능한 타입의 데이터 사용 가능
  // 데이터를 늘어트려준다.
  // 사용 예시
  function sum(x, y, z) {
    return x + y + z;
  }
  const numbers = [1, 2, 3];
  console.log(
    '기존 방식의 함수 호출 : ',
    sum(numbers[0], numbers[1], numbers[2])
  );

  console.log(
    '전개연산자를 이용한 함수 호출 : ',
    sum(...numbers)
  );

  const onToggle = useCallback(
    (id) => {
      setTodos(todos => 
        todos.map(
          // 전개연산자를 이용해(...todo) todo를 늘어뜨러주고, 그 중 ckecked에서만 반대로 입력시키도록 추가(checked: !todo.checked)
          (todo) => todo.id === id ? { ...todo, checked: !todo.checked } : todo
        )
      );
    }, []
  );

  return (
    <TodoTemplate>
      {/* Todo App을 만들자. */}
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
}

export default App;
