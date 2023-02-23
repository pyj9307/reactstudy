import React, { Component } from 'react';
import './App.css';
import Subject from './Subject';
import TOC from './TOC';
import Content from './Content';

// <> </> fragment 태그 : 아무 기능 없고 감싸고만 있을 수 있는 태그
// Ctrl + A로 전체 코드 선택 후 Ctrl + K + F 을 누르면 자동으로 줄 맞춤


class App extends Component {
  // TOC, Content 클래스를 컴포넌트 
  constructor(props) {
    // state값 생성
    //this.state = { 데이터 이름 : 실제데이터 }
    super(props);
    this.state = {
      Subject: {title:'WEB', sub:'World Wide Web!'},
      contents : [
        {id : 1, title : 'HTML', desc : 'HTML is for information'},
        {id : 2, title : 'CSS', desc : 'CSS is for design'},
        {id : 3, title : 'JavaScript', desc : 'JS is for interactive'}
      ]
    }
  }
  render() {
    // html 태그 : 소문자로 시작
    // 리액트의 컴포넌트 : 대문자(클래스명을 생성할 때 이름규칙을 따른다.)

    // 컴포넌트에 데이터 전달
    // 컴포넌트에 속성을 추가하듯이 적용 시켜주면 된다.
    return (
      <div className="App">
        <Subject title={this.state.Subject.title} sub={this.state.Subject.sub} />
        <TOC contents={this.state.contents}/>
        <Content title={this.state.contents[0].title} desc={this.state.contents[0].desc} />
      </div>
    );
  }
}

export default App;
