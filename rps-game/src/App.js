import { Component } from 'react';
import './App.css';

class Rps extends Component {
 
  render() {
    let com = '';
    if (this.props.com === 0) {
      com = '가위'
    } else if (this.props.com === 1) {
      com = '바위'
    } else if (this.props.com === 2) {
      com = '보'
    } else {
      com = '-'
    }

    return (
      <div>
        <img className='rpsImg' src='./scissors.png' alt='scissors'
        onClick={function(){
          this.props.onSelect(0);
        }.bind(this)} />
        <img className='rpsImg' src='./rock.png' alt='rock'
        onClick={function(){
          this.props.onSelect(1);
        }.bind(this)} />
        <img className='rpsImg' src='./paper.png' alt='paper'
        onClick={function(){
          this.props.onSelect(2);
        }.bind(this)} />
        <h1>컴퓨터 : {this.props.com === '-' ? '-' : com}</h1>
        <h1>결과 : {this.props.result}</h1>
      </div>
    )
  }
}


class App extends Component {
  constructor(props){
    super(props);
    this.state={
      you : '-', com : '-', result : '선택해주세요'
    }
  }
  // 가위바위보 로직
  // 가위 : 0, 바위 : 1, 보 : 2
  // 사용자가 가위바위보를 냈을 때 경우의 수
  // 내가 지는 경우
  // %는 나머지를 구하는 함수
  // 나 : 가위(0), 컴 : 바위(1), 1 % 3 = 1        
  // 나 : 바위(1), 컴 : 보(2), 2 % 3 = 2 
  // 나 : 보(2), 컴 : 가위(0), 3 % 3 = 0
  // (내가 낸 숫자+1) % 3 = (컴퓨터가 낸 숫자)
  check(you){
    // Math.random() : 0~1사이의 값을 랜덤하게 추출
    const comSelect = parseInt(Math.random()*3);
    if((you+1)%3 === comSelect){ // 내가 지는 경우
      this.setState({com : comSelect, result : '당신이 졌습니다.'})
    }else if(you === comSelect){ // 내가 비기는 경우
      this.setState({com : comSelect, result : '당신이 비겼습니다.'})
    }else{ // 내가 이기는 경우
      this.setState({com : comSelect, result : '당신이 이겼습니다.'})
    }
  }
  render() {
    return (
      <div className="App">
        <Rps />
      </div>
    );
  }
  render(){
    return(
      <div className="App">
        <Rps com={this.state.com} result={this.state.result}
        onSelect={function(you){
          this.check(you);
        }.bind(this)}/>
      </div>
    );
  }
}

export default App;
