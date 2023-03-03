import React from "react";
import Categories from "./Categories";
import WeatherList from "./WeatherList";
// 파라미터를 받아오는 useParams 호출
import {useParams} from 'react-router-dom';

const WeatherPage = () => {
    const param = useParams();
    // path 파라미터에서 all이 아니면 param[]에 저장이 되어 category에 저장된다. ('*' -> 모든 문자열)
    const category = param['*'] || '159';
  return (
    <>
      <Categories category={category}/>
      <WeatherList category={category}/>
    </>
  );
}

export default WeatherPage;