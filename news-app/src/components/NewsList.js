import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import NewsItem from './NewsItem';
import axios from 'axios';

const NewsListBlock = styled.div`
    box-sizing: border-box;
    padding-bottom: 3rem;
    width: 768px;
    margin: 0 auto;
    margin-top: 2rem;
    @media screen and (max-width: 768px) {
        width: 100%;
        padding-left: 1rem;
        padding-right: 1rem;
    }
`;

const sampleArticle = {
    title : '제목',
    description : '내용',
    url : 'https://www.naver.com',
    urlToImage : 'https://via.placeholder.com/160'
}

const NewsList = ({category}) => {
    const [articles, setArticles] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        const fetchData = async ()=>{
            setLoading(true);
            try {
                // 카테고리가 all 외에 다른 문자열이 들어오면 파라미터에 추가한다.
                const query = category === 'all' ? '' : `&category=${category}`;
                const response = await axios.get(
                    'https://newsapi.org/v2/top-headlines?country=kr&apiKey=255f0a08ee2349338ae854cb21da4aa8'
                    +query
                    );
                console.log(response.data.articles);
                setArticles(response.data.articles);
            } catch (e) {
                console.log(e);
            }
            setLoading(false);
        };
        fetchData();
    },[category]);//category props 값이 변경시에 동작 되도록

    if(loading){ //로딩시에 보여줄 문자열
        return <NewsListBlock>대기 중...</NewsListBlock>
    }

    if(!articles){ // articles 상태값이 없을때 
        return null;
    }

    return(
        <NewsListBlock>
            {/* 샘플 데이터 확인용 */}
            {/* <NewsItem article={sampleArticle}/>
            <NewsItem article={sampleArticle}/>
            <NewsItem article={sampleArticle}/> */}

            {/* 배열.map() 함수의 특성을 이용해서 
                articles배열에 컴포넌트가 담겨지도록 재구성한다. */}
            {articles.map( article => {
                return <NewsItem key={article.url} article={article} />;
            })}
        </NewsListBlock>
    )
}

export default NewsList;