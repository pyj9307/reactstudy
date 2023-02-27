import './App.css';
// 함수형 컴포넌트에서 state 사용하기 위해 useState import
import { Component, useState } from 'react';

class ClassComp extends Component {
  constructor(props) {
    console.log('mount_1 : constructor'); // 라이프사이클 - 마운트
    super(props);
    this.state = {
      number: this.props.initNumber,
      // 클래스형 컴포넌트에서 state값을 여러개 추가
      // 1. state값 사이에 ,(콤마)로 구분 지어준다.
      // 2. 형태는 dataName : realData로 동일함.
      date: new Date().toString()
    }
  }

componentDidMount(){
  console.log('mount_3 : componentDidMount'); // 라이프사이클 - 마운트
}

shouldComponentUpdate(){
  console.log('update_1 : shouldComponentUpdate'); // 라이프사이클 업데이트
  // return을 true로 해주지 않으면, 이 함수 이후로 실행되는 업데이트 관련 함수들이 작동하지 않는다.
  return true;
}

componentDidUpdate(){
  console.log('update_3 : componentDidUpdate'); // 라이프사이클 - 업데이트
}

componentWillUnmount(){
  console.log('unmount : componentWillUnmount'); // 라이프사이클 - 언마운트
}

  render() {
    console.log('mount_2 : render'); // 라이프사이클 - 마운트
    console.log('update_2 : render'); // 라이프사이클 - 업데이트
    // const number = this.props.initNumber; // 클래스형 컴포넌트에서 props 사용
    return (
      <div className='container'>
        <h2>클래스형 컴포넌트</h2>
        <p>number : {this.state.number}</p>
        <button onClick={() => {
          // 클래스형 컴포넌트에서 state값을 변경할 때
          // 무조건 this.setState()함수를 이용해야만 한다.
          // 객체형대의 데이터 형식을 맞춰준다.
          this.setState({ number: Math.random() })
        }}>random</button>
        <p>date : {this.state.date}</p>
        <button onClick={function () {
          this.setState({ date: new Date().toString() });
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

  // 함수형 컴포넌트에서 state값이 여려개일 때
  // useState함수를 이용해서 기존에 추가했던 방식과 동일하게 state값을 추가한다.
  // react 공식문서에서 제공하는 useState함수 활용 방법
  // const [state, setState] = useState(realData);
  const [date, setDate] = useState(new Date().toString());
  return (
    <div className='container'>
      <h2>함수형 컴포넌트</h2>
      <p>number : {number}</p>
      <button onClick={() => {
        // setNumber변수에는 함수가 내장되어 있어서 함수 호출하듯이 사용하면 된다.
        setNumber(Math.random());
      }}>random</button>
      <p>date : {date}</p>
      <button onClick={function () {
        // 함수형 컴포넌트에서는 state값과 setState함수가 1 대 1 관계이기 때문에, 해당 state값의 setState함수를 호출해야만 한다.
        setDate(new Date().toString());
      }}>Date 변경</button>
    </div>
  )
}

function App() {
  const [isShow, setShow] = useState(true);
  return (
    <div className="container">
      <h1>리액트 컴포넌트</h1>
      {/* <ClassComp initNumber={2} /> */}
      {isShow === true ? <ClassComp initNumber={2}/> : null}
      <FuncComp initNumber={2} />
    </div>
  );
}

export default App;
