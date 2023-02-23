import React, {Component} from 'react';

class Footer extends Component {
  // 연습문제 - 반복문을 사용하여 h5태그를 표현
  render() {
    const list = [];
    for (let i = 0; i < this.props.desc.length; i++) {
      const desc = this.props.desc[i];
      list.push(
        <h5 key ={i}onClick={function(e){
          // 부모 컴포넌트(App컴포넌트)에서 정의한 onChangeStyle
            this.props.onChangeStyle(e);
          }.bind(this)}>{desc}</h5>
      );
    }
    return (
      <footer>
      {list}
        {/* <h5>{this.props.desc[0]}</h5>
        <h5>{this.props.desc[1]}</h5>
        <h5>{this.props.desc[2]}</h5>
        <h5>{this.props.desc[3]}</h5>
        <h5>{this.props.desc[4]}</h5> */}
      </footer>
    )
  }

}

export default Footer;