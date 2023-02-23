import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

// 기본 단축기 정리
// ctrl + shift + k : 한줄 삭제
// alt + shift + 방향키 위, 아래 : 한줄 복사
// alt + 방향키 위, 아래 : 한줄씩 이동
// ctrl + / : 주석처리 or 해제
// ctrl + j : 현재 실행되는 터미넣 숨기기 or 나타내기
// ctrl  + shift + ` : 새 터미널 열기
// 터미널에서 ctrl + c : 작업 끝내기
// 터미널에서 clear : 터미널 비우기
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>hello world</h1>
      </div>
    );
  }
}

export default App;
