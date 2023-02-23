import React, {Component} from 'react';

class TOC extends Component {
    // pure.html에 있는 nav태그를 컴포넌트화
    render() {
      return (
        <nav>
          <ul>
            <li><a href={this.props.contents[0].id + '.html'}>{this.props.contents[0].title}</a></li>
            <li><a href={this.props.contents[1].id + '.html'}>{this.props.contents[1].title}</a></li>
            <li><a href={this.props.contents[2].id + '.html'}>{this.props.contents[2].title}</a></li>
          </ul>
        </nav>
      )
    }
  }
  
  export default TOC;