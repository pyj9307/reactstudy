import React from 'react';
import styled from 'styled-components';

const NewsItemBlock = styled.div`
display: flex;
.thumbnail {
margin-right: 1rem;
img {
display: block; width: 160px;
height: 100px; object-fit: cover;
}
}
.contents {
h2 {
margin: 0;
a { color: black; }
}
p {
margin: 0; line-height: 1.5;
margin-top: 0.5rem; white-space: normal;
}
}
& + & { margin-top: 3rem; }
`;

const NewsItem = ({article}) => {
    const {stnNm, tm, avgTa, minTa, minTaHrmt, maxTa, maxTaHrmt, sumRn, sumRnDur } = article;
    return(
        <NewsItemBlock>
            <div className='contents'>
            <table border="1" bordercolor="" width ="800">
            <tr align='center' bgcolor='white'>
            <td rowspan="2" align = "center">{stnNm}</td>
            <td>날짜</td>
            <td>평균 기온</td>
            <td>최저 기온</td>
            <td>최저 기온 시각</td>
            <td>최고 기온</td>
            <td>최고 기온 시각</td>
            <td>일강수량</td>
            <td>강수 계속시간</td>
            </tr>
            <tr align='center' bgcolor='white'>
            <td>{tm}</td>
            <td>{avgTa}</td>
            <td>{minTa}</td>
            <td>{minTaHrmt}</td>
            <td>{maxTa}</td>
            <td>{maxTaHrmt}</td>
            <td>{sumRn}</td>
            <td>{sumRnDur}</td>
            </tr>
            </table>
            </div>
        </NewsItemBlock>
    )
}

export default NewsItem;