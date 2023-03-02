import './App.css';
import {useState} from 'react';
import axios from 'axios';
import styled from 'styled-components';

// styled-components : 스타일이 적용된 html요소를 생성할수 있게 해준다.
// 역따옴표(``)안쪽에 css를 정의하고,
// 변수를 만들어서 저장시킨 후 해당 변수를 html태그 대신 사용한다.

// styled-components를 이용한 스타일이 적용된 div태그 작성
const StyledDiv = styled.div`
  width:200px;
  height:50px;
  background-color:red;
`

function App() {
  const [data,setData] = useState(null);
  const onClick = () => {
    const news = axios.get('https://newsapi.org/v2/top-headlines?country=kr&apiKey=a8f0d4f98b2f4e60847d990ca71a8503')
    news.then((result)=>{
      console.log(result);
    });
  }
  return (
    <div>
      {/* 스타일이 적용된 div태그 사용 
        일반적인 컴포넌트를 사용하듯이 적용 시키면 된다. */}
      <StyledDiv>
        <button onClick={onClick}>ajax통신하기</button>
      </StyledDiv>
    </div>
  );
}

export default App;