import React, {Component} from 'react';

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
            <h1>{this.props.title}</h1>
            <h1>{this.props.sub}</h1>
          </header>
      )
    }
  }

  export default Subject;
  