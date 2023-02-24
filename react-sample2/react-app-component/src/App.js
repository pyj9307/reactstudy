import './App.css';
import { Component, useState } from 'react';

class ClassComp extends Component {
  constructor(props){
    super(props);
    this.state = {
      number : this.props.initNumber
    }
  }
  render() {
    // const number = this.props.initNumber; // 클래스형 컴포넌트에서 props 사용
    return (
      <div className='container'>
        <h2>클래스형 컴포넌트</h2>
        <p>number : {this.state.number}</p>
      </div>
    );
  }
}

// 함수형 컴포넌트에서 props 사용 방법
// 1 - 함수형 컴포넌트 선언부의 파라미터(매개변수)에 첫번째 항목에 props라는 이름으로 선언해준다.
// 2 - 함수 내부에서 props.데이터이름 or props.함수이름 으로 사용한다.
function FuncComp(props) {
  // const number = props.initNumber

  // 함수형 컴포넌트에서 state 사용
  const numberState = useState(props.initNumber);
  const number = numberState[0];
  console.log(numberState);
  return(
  <div className='container'>
    <h2>함수형 컴포넌트</h2>
    <p>number : {number}</p>
  </div>
  )
}

function App() {
  return (
    <div className="container">
      <h1>리액트 컴포넌트</h1>
      <ClassComp initNumber={2}/>
      <FuncComp initNumber={2}/>
    </div>
  );
}

export default App;
