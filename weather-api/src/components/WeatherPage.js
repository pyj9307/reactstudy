import React, { useState } from "react";
import styled from 'styled-components';
import Categories from "./Categories";
import WeatherList from "./WeatherList";
// 파라미터를 받아오는 useParams 호출
import { useParams } from 'react-router-dom';

const Calender1 = styled.h1`
display: flex;
    padding: 1rem;
    width: 768px;
    margin: 0 auto;
`;


const WeatherPage = () => {
  const param = useParams();
  // path 파라미터에서 all이 아니면 param[]에 저장이 되어 category에 저장된다. ('*' -> 모든 문자열)

  const [timer, setTimer] = useState();
  const endDate = timer - 1;
  const startDate = timer - 5;

  const currentDate = () => {
    const date = new Date();
    const year = String(date.getFullYear()).padStart(4, "0");
    const months = String(date.getMonth() + 1).padStart(2, "0");
    const days = String(date.getDate()).padStart(2, "0");
    // const hours = String(date.getHours()).padStart(2, "0");
    // const minutes = String(date.getMinutes()).padStart(2, "0");
    // const second = String(date.getSeconds()).padStart(2, "0");
    setTimer(`${year}${months}${days}`)
  }

  const startTimer = () => {
    setInterval(currentDate, 1000)
    console.log(startDate);
    console.log(endDate);
  }

  startTimer()

  const category = param['*'] || `159/${startDate}/${endDate}`;

  return (
    <>
      <Categories category={category} />
      <Calender1>Today : {timer}</Calender1>
      <WeatherList category={category} />
    </>
  );
}

export default WeatherPage;