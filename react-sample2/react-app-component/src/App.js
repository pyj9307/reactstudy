import './App.css';
// useState : 함수형 컴포넌트에서 state기능 사용을 위한 임포트
// useEffect : 함수형 컴포넌트에서 lifeCycle함수 이용을 위한 임포트
// useRef : 함수형 컴포넌트에서 useEffect함수에서 회신 state값 활용을 위한 임포트
import { Component, useState, useEffect, useRef } from 'react';

class ClassComp extends Component {
  constructor(props) {
    // console.log('mount_1 : constructor'); // 라이프사이클 - 마운트
    super(props);
    this.state = {
      number: this.props.initNumber,
      // 클래스형 컴포넌트에서 state값을 여러개 추가
      // 1. state값 사이에 ,(콤마)로 구분 지어준다.
      // 2. 형태는 dataName : realData로 동일함.
      date: new Date().toString()
    }
  }

  componentDidMount() {
    // console.log('mount_3 : componentDidMount'); // 라이프사이클 - 마운트
  }

  shouldComponentUpdate() {
    // console.log('update_1 : shouldComponentUpdate'); // 라이프사이클 업데이트
    // return을 true로 해주지 않으면, 이 함수 이후로 실행되는 업데이트 관련 함수들이 작동하지 않는다.
    return true;
  }

  componentDidUpdate() {
    // console.log('update_3 : componentDidUpdate'); // 라이프사이클 - 업데이트
  }

  componentWillUnmount() {
    console.log('unmount : componentWillUnmount'); // 라이프사이클 - 언마운트(코드 언마운트 발동)
  }

  render() {
    // console.log('mount_2 : render'); // 라이프사이클 - 마운트
    // console.log('update_2 : render'); // 라이프사이클 - 업데이트
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
  console.log('함수형 mount_1, update_1') // 라이프사이클 - mount, update
  // const number = props.initNumber

  useEffect(function () { // componentDidMount, componentDidUpdate의 역할과 동일
    console.log('함수형 mount_2, update_2') // 라이프사이클 - mount
    return function(){ // 라이프사이클 - unmount(cleanUp 함수)
      console.log('함수형 unmount => useEffect의 return')
    }
  });

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

// 라이프사이클 메소드를 활용한 최신state값 활용 - class형 컴포넌트
class ClassCounter extends Component{
  state = {count:0}
  componentDidUpdate(){
    // 업데이트가 된 이후 setTimeout함수가 작동
    setTimeout(()=>{
      console.log(`class형 : ${this.state.count}`); // `${변수명}` -> 문자열 내부에서 변수명을 사용가능
    },1000); // 1000 밀리 세컨드 = 1초 뒤에 콜백함수를 실행
  }
  render(){
    return(
      <> {/*부모요소의 생성은 필수인데 빈 요소로 선언해서 사옹 가능(프래그먼트)*/}
      <button onClick={function(){
        this.setState({count:this.state.count+1});
      }.bind(this)}>클래스3 count</button>
      </>
    );
  }
}

// 라이프사이클 메소드를 활용한 최신state값 활용 - function형 컴포넌트
function FuncCounter(){
  const [count, setCount] = useState(0);
  // 특정 상태값이 변경될때만 useEffect함수가 실행되는지 테스트를 위한 상태값 생성
  const [etc, setEtc] = useState(0);

  // 함수형 컴포넌트에서 useEffect를 사용하여 최신 state값 활용
  // 임의의 변수를 하나 생성하여 useRef()를 저장한다.
  // ex : 임의의 변수 = useRef();
  const latestCount = useRef();

  useEffect(function(){
    // useRef를 저장한 변수.current에 state값을 저장시킨다.
    latestCount.current = count;

    setTimeout(()=>{
      // console.log(`함수형 : ${count}`); // 최신 상태의 state값이 아닌 클릭했을 때 당시의 state값이 순차적으로 출력
      console.log(`함수형 : ${latestCount.current}`); // useEffect에서 최신상태의 state값을 활용
    },1000);
  });

  // 컴포넌트 생성시 한번만 useEffect() 실행
  useEffect(function(){
    console.log('FuncCounter 컴포넌트의 useEffect 실행 - 마운트 될 때 한번만 실행');
  },[]); // ,[]를 넣으면 콘솔에 한번만 실행 됨

  // 지정된 값 변경시 useEffect()실행 - upate
  useEffect(function(){
    console.log('count 상태값이 변경될 때 실행');
  },[count]);
  return(
    <>
    <button onClick={function(){
      setCount(count+1);
    }}>함수형3 count</button>
    <button onClick={function(){
      setEtc(etc+1);
    }}>함수형 etc 변경</button>
    </>
  );
}

function App() {
  const [isShow, setShow] = useState(true);
  const [isShow2, setShow2] = useState(true);
  return (
    <div className="container">
      <h1>리액트 컴포넌트</h1>
      {/* <ClassComp initNumber={2} /> */}
      {isShow === true ? <ClassComp initNumber={2} /> : null}
      {/* <FuncComp initNumber={2} /> */}
      {isShow2 === true ? <FuncComp initNumber={2} /> : null}
      <ClassCounter />
      <FuncCounter />
    </div>
  );
}


export default App;
