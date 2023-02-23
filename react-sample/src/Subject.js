import React, { Component } from 'react';

class Subject extends Component {
  render() {
    // JS에서 문자열 템플릿 : `${변수}` 역따옴표 안에서 사용
    // console.log("로그 출력할 메시지"); -> 로그 확인용
    // 부모 컴포넌트로부터 전달받은 데이터는
    // this.props 객체 안에 저장이 되어있다.
    console.log(`props로 전달받은 데이터 확인 : ${this.props.title}`)
    console.log(`props로 전달받은 데이터 확인 : ${this.props.sub}`)
    return (
      <header>
        {/* props의 데이터 사용하는 법 {this.props.데이터이름} */}
        <h1>
          {/* a태그를 사용할 떄 문제점
          1. 새로고침하면서 상태값을 다 초기화
          2. 랜더링을 새롭게 하면서 속도가 저하 된다. */}
          <a href='/' onClick={function (e) {
            e.preventDefault(); // e에 지정된 preventDefault의 기능 : html 요소의 기본동작을 막아준다.(여기서는 페이지의 새로고침을 막아줌)
          // alert('title click');
          this.props.onChangePage(); // 부모컴포넌트에서 전달해준 함수를 호출해준다.
        }.bind(this)}>
          {this.props.title}
        </a>
        </h1>
        <h1>{this.props.sub}</h1>
      </header>
    )
  }
}

export default Subject;
