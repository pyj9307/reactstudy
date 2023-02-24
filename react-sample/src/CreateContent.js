import {Component} from 'react';

class CreateContent extends Component {
    render(){
        return(
            <article>
            <h2>Create Content</h2>
            <form action='/create_process' method='post'
                onSubmit={function(e){
                    e.preventDefault();
                    // form 태그 내부의 태그에 name을 할당해주면 e.target.네임값.value로 해당 태그의 value값을 읽어올 수 있다.
                    const title = e.target.title.value;
                    // console.log('title : '+title);
                    const desc = e.target.desc.value;
                    this.props.onSubmit(title,desc);
                }.bind(this)}>
                <p><input type='text' name='title'></input></p>
                <p><textarea name='desc'></textarea></p>
                <p><input type='submit'></input></p>
            </form>
            </article>
        );
    }
}

export default CreateContent;