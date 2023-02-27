import './App.css';
// 함수형 컴포넌트에서 state 사용하기 위해 useState import
import { Component, useState } from 'react';

class ClassComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: this.props.initNumber,
      // 클래스형 컴포넌트에서 state값을 여러개 추가
      // 1. state값 사이에 ,(콤마)로 구분 지어준다.
      // 2. 형태는 dataName : realData로 동일함.
      date : new Date().toString()
    }
  }
  render() {
    // const number = this.props.initNumber; // 클래스형 컴포넌트에서 props 사용
    return (
      <div className='container'>
        <h2>클래스형 컴포넌트</h2>
        <p>number : {this.state.number}</p>
        <button onClick={() => {
          // 클래스형 컴포넌트에서 state값을 변경할 때
          // 무조건 this.setState()함수를 이용해야만 한다.
          // 객체형대의 데이터 형식을 맞춰준다.
          this.setState({number: Math.random()})
        }}>random</button>
        <p>date : {this.state.date}</p>
        <button onClick={function(){
          this.setState({date:new Date().toString()});
        }.bind(this)}>Date 변경</button>
      </div>
    );
  }
}

// 함수형 컴포넌트에서 props 사용 방법
// 1 - 함수형 컴포넌트 선언부의 파라미터(매개변수)에 첫번째 항목에 props라는 이름으로 선언해준다.
// 2 - 함수 내부에서 props.데이터이름 or props.함수이름 으로 사용한다.
function FuncComp(props) {
  // const number = props.initNumber

  // 함수형 컴포넌트에서 state 사용 방법 - useState 함수 사용.
  const numberState = useState(props.initNumber);
  // numberState의 0번째 배열에는 state의 실제 데이터가 있다.
  const number = numberState[0];
  // console.log(numberState);

  // numberState의 첫번째 배열에는 익명함수(setState함수)가 내장되어있다.
  // 즉, 아래와 같은 형태라고 볼 수 있다.
  // setNumber = function(){setState()} 함수가 내장된 형태
  // const [state, setState] = useState(initialState); -> https://reactjs.org/docs/hooks-reference.html#usestate 참고
  const setNumber = numberState[1];
  return (
    <div className='container'>
      <h2>함수형 컴포넌트</h2>
      <p>number : {number}</p>
      <button onClick={() => {
        // setNumber변수에는 함수가 내장되어 있어서 함수 호출하듯이 사용하면 된다.
        setNumber(Math.random());
      }}>random</button>
    </div>
  )
}

function App() {
  return (
    <div className="container">
      <h1>리액트 컴포넌트</h1>
      <ClassComp initNumber={2} />
      <FuncComp initNumber={2} />
    </div>
  );
}

export default App;
