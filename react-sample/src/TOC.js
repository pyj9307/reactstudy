import React, { Component } from 'react';

class TOC extends Component {
  // pure.html에 있는 nav태그를 컴포넌트화
  render() {
    const list = [];
    for (let i = 0; i < this.props.contents.length; i++) {
      const content = this.props.contents[i];
      list.push(
        // 반복문으로 특정요소를 생성할 때 key속성을 추가해줘야 한다.
        // key속성을 추가할때는 유니크한 값이 오도록 해야한다.
        <li key={content.id}> {/* {content.id} 대신에 {i}가 들어가도 좋음 */}
          <a href={'/content/' + content.id}
            onClick={function (e) {
              e.preventDefault();
              this.props.onSelect(content.id);
            }.bind(this)}>
            {content.title}
          </a>
        </li>
      );
    }
    return (
      <nav>
        <ul>
          {list}

          {/* <li>
            <a href={this.props.contents[0].id + '.html'}
              onClick={function (e) {
                e.preventDefault();
                this.props.onSelect(this.props.contents[0].id);
              }.bind(this)}>
              {this.props.contents[0].title}
            </a>
          </li>
          <li>
            <a href={this.props.contents[1].id + '.html'}
              onClick={function (e) {
                e.preventDefault();
                this.props.onSelect(this.props.contents[1].id);
              }.bind(this)}>
              {this.props.contents[1].title}
            </a>
          </li>
          <li>
            <a href={this.props.contents[2].id + '.html'}
              onClick={function (e) {
                e.preventDefault();
                this.props.onSelect(this.props.contents[2].id);
              }.bind(this)}>
              {this.props.contents[2].title}
            </a>
          </li> */}

          {/* <li><a href={this.props.contents[0].id + '.html'}>{this.props.contents[0].title}</a></li>
          <li><a href={this.props.contents[1].id + '.html'}>{this.props.contents[1].title}</a></li>
          <li><a href={this.props.contents[2].id + '.html'}>{this.props.contents[2].title}</a></li> */}

        </ul>
      </nav>
    )
  }
}

export default TOC;