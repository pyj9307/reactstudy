import React, { Component } from 'react';
import './App.css';
import Subject from './Subject';
import TOC from './TOC';
import Content from './Content';
import Like from './Like';

// <> </> fragment 태그 : 아무 기능 없고 감싸고만 있을 수 있는 태그
// Ctrl + A로 전체 코드 선택 후 Ctrl + K + F 을 누르면 자동으로 줄 맞춤


class App extends Component {
  // TOC, Content 클래스를 컴포넌트 
  constructor(props) {
    // state값 생성
    //this.state = { 데이터 이름 : 실제데이터 }
    super(props);
    this.state = {
      Subject: { title: 'WEB', sub: 'World Wide Web!' },
      // [] : 리액트에서 배열을 의미, {} : 리액트에서 객체를 의미, id : 1 ->  key : value
      contents: [
        { id: 1, title: 'HTML', desc: 'HTML is for information' },
        { id: 2, title: 'CSS', desc: 'CSS is for design' },
        { id: 3, title: 'JavaScript', desc: 'JS is for interactive' }
      ],
      mode: 'read',
      welcome: { title: 'welcome', desc: 'Hello React' },
      selected_content_id : 1
    }
  }

  findContendById(id){
    let content;
    for(let i = 0; i < this.state.contents.length; i++){
      if(id === this.state.contents[i].id){
        // 파라미터로 받은 id값과 state에 있는 contents의 id값이 일치하면
        // content 변수에 저장한다.
        content = this.state.contents[i];
        break; // 저장이 끝난 후 더이상 for문을 실행하지 않아도 되므로, 종료.
      }
    }
    return content; // 저장이 끝난 content변수를 호출한 곳으로 반환한다.
  }
  render() {
    // // 함수 내에서 this 키워드를 사용하는 방법
    // const a = function(){
    //   // 기본함수에서 this키워드를 이용할때는 함수뒤에 .bind(this)를 붙여줘야한다.
    //   console.log(this);
    // }.bind(this)
    // a();  
    
    // const b = () => {
    //   // 화살표 함수를 이용하면 this키워드를 이용할 수 있다.
    //   console.log(this);
    // }
    // a();

    let title, desc;
    if (this.state.mode === 'welcome') { // === : 값이랑 타입까지 비교해주는 비교연산
      title = this.state.welcome.title
      desc = this.state.welcome.desc;
    } else if (this.state.mode === 'read') {
      const content = this.findContendById(this.state.selected_content_id); // content에 findContendById 함수를 이용해서 id값을 확인한 후 title, desc를 불러와서 담겼으므로
      title = content.title;
      desc = content.desc;
    }
    // html 태그 : 소문자로 시작
    // 리액트의 컴포넌트 : 대문자(클래스명을 생성할 때 이름규칙을 따른다.)

    // 컴포넌트에 데이터 전달
    // 컴포넌트에 속성을 추가하듯이 적용 시켜주면 된다.
    return (
      <div className="App">
        <Subject title={this.state.Subject.title} sub={this.state.Subject.sub} 
        onChangePage={function(){
          this.setState({mode : 'welcome'});
        }.bind(this)} />
        <TOC contents={this.state.contents}
        onSelect={(id)=>{
          this.setState({mode:'read', selected_content_id : id})
        }} />
        <Content title={title} desc={desc} />
        {/* 좋아요 기능 UI 구현 */}
        <Like onLike={function(id){
          if(id === 'like'){ // 빨간색 하트가 클릭 됐을 때
            document.getElementById('like').style.display = "none";
            document.getElementById('unlike').style.display = "inline";
          }else{ // 빈 하트가 클릭 됐을 때
            document.getElementById('like').style.display = "inline";
            document.getElementById('unlike').style.display = "none";
          }
        }}
          />
      </div>
    );
  }
}

export default App;
