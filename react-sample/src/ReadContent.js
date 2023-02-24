import React, {Component} from 'react';

class ReadContent extends Component {
    // pure.html에 있는 article태그를 컴포넌트화
    render() {
      return (
        <article>
          {/* props에서 전달받은 데이터를 활용하여
          제목(title), 설명글(desc)을 변경해여 적용 해봅시다. */}
          <h2>{this.props.title}</h2>
          {this.props.desc}
          {/* <h2>HTML</h2>
          HTML is HyperText Markup Language. */}
        </article>
      )
    }
  }
  
  export default ReadContent;  