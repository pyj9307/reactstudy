import { Component } from 'react';

class Like extends Component {
    render() {
        // 특정 태그에 style을 바로 적용 시킬 때
        // JS의 객체형태{}로 스타일을 작성해서, 적용시켜야 한다.
        let defauntStyle = {
            display: "none"
        }
        return (
            <div>
                {/* 이미지 파일 경로 설정시 public폴더에 저장하도록 한다
                    class를 지정할 때 : className이라는 속성명을 사용하도록 한다. */}
                <img className='like' id='like' src='./like.png' alt='like' style={defauntStyle}
                    onClick={function () {
                        this.props.onLike('like');
                    }.bind(this)} />
                <img className='like' id='unlike' src='./unlike.png' alt='unlike'
                    onClick={function () {
                        this.props.onLike('unlike');
                    }.bind(this)} />
            </div>

        );
    }
}
export default Like;