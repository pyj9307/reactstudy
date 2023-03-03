import React from 'react';
import styled from 'styled-components';

const WeatherItemBlock = styled.div`
display: flex;
.contents {
}
// <WeatherItemBlock> 두개 사이에 있을 경우
& + & { margin-top: 1.5rem; }
`;

const WeatherItem = ({article}) => {
    const {stnNm, tm, avgTa, minTa, minTaHrmt, maxTa, maxTaHrmt, sumRn, sumRnDur } = article;
    return(
        <WeatherItemBlock>
            <div className='contents'>
            <table border="1" width ="800">
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
        </WeatherItemBlock>
    )
}

export default WeatherItem;