import './DescInput.css';
import { Component } from 'react';
class DescInput extends Component {
    render() {
        return (
            <form className='desc-input' onSubmit={function (e) {
                    e.preventDefault();
                    // form 내부의 특정 태그의 값을 가져올 때
                    // e.targer.네임값.value로 가져올 수 있다.
                    // 특정 태그에 name속성을 부여해야한다.
                    this.props.onSubmit(e.target.desc.value);
                }.bind(this)}>
                <input type='text' name='desc' />
                <button type='submit'>추가</button>
            </form>
        );
    }
}
export default DescInput;