import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

const CategoriesBlock = styled.div`
    display: flex;
    padding: 1rem;
    width: 768px;
    margin: 0 auto;
    @media screen and (max-width: 768px) {
        width: 100%;
        overflow-x: auto;
    }
    select{
        width:100px; height:30px; margin-right: 30px; font-size:17px; border: 0px;
    }
    input{
        width:100px; height:25px; margin-right: 30px; font-size:13px; border: 0px;
    }
`;

// 스타일이 적용된 NavLink로 수정
const Category = styled(NavLink)`
    font-size: 1.125rem;
    cursor: pointer;
    white-space: pre;
    text-decoration: none;
    color: inherit;
    padding-bottom: 0.25rem;
    &:hover {
        color: #495057;
    }
    & + & {
        margin-left: 1rem;
    }

    &.active{
        font-weight: 600; border-bottom : 2px solid #22b8cf; color : #22b8cf;
        &:hover{
            color: #3bc9db;
        }
    }
`;

const Categories = () => {

    const [selectValue, setSelectValue] = useState('159');
    const onChangeRegion = (e) => {
        setSelectValue(e.target.value);
        console.log(e.target.value);
    };

    const categories = [
        { name: `${selectValue}`, text: '선택' }
    ];

    return (
        <CategoriesBlock>
            <div>
                <select value={selectValue} onChange={(e) => onChangeRegion(e)}>
                    <option value="105">	강릉	</option>
                    <option value="259">	강진군	</option>
                    <option value="201">	강화	</option>
                    <option value="294">	거제	</option>
                    <option value="284">	거창	</option>
                    <option value="283">	경주시	</option>
                    <option value="185">	고산	</option>
                    <option value="172">	고창	</option>
                    <option value="251">	고창군	</option>
                    <option value="262">	고흥	</option>
                    <option value="266">	광양시	</option>
                    <option value="156">	광주	</option>
                    <option value="279">	구미	</option>
                    <option value="140">	군산	</option>
                    <option value="238">	금산	</option>
                    <option value="253">	김해시	</option>
                    <option value="247">	남원	</option>
                    <option value="295">	남해	</option>
                    <option value="100">	대관령	</option>
                    <option value="143">	대구	</option>
                    <option value="133">	대전	</option>
                    <option value="98">		동두천	</option>
                    <option value="106">	동해	</option>
                    <option value="165">	목포	</option>
                    <option value="273">	문경	</option>
                    <option value="288">	밀양	</option>
                    <option value="102">	백령도	</option>
                    <option value="235">	보령	</option>
                    <option value="258">	보성군	</option>
                    <option value="226">	보은	</option>
                    <option value="271">	봉화	</option>
                    <option value="159">	부산	</option>
                    <option value="243">	부안	</option>
                    <option value="236">	부여	</option>
                    <option value="104">	북강릉	</option>
                    <option value="255">	북창원	</option>
                    <option value="93">		북춘천	</option>
                    <option value="289">	산청	</option>
                    <option value="137">	상주	</option>
                    <option value="189">	서귀포	</option>
                    <option value="129">	서산	</option>
                    <option value="108">	서울	</option>
                    <option value="188">	성산	</option>
                    <option value="239">	세종	</option>
                    <option value="90">		속초	</option>
                    <option value="119">	수원	</option>
                    <option value="254">	순창군	</option>
                    <option value="174">	순천	</option>
                    <option value="136">	안동	</option>
                    <option value="257">	양산시	</option>
                    <option value="202">	양평	</option>
                    <option value="168">	여수	</option>
                    <option value="252">	영광군	</option>
                    <option value="277">	영덕	</option>
                    <option value="121">	영월	</option>
                    <option value="272">	영주	</option>
                    <option value="281">	영천	</option>
                    <option value="170">	완도	</option>
                    <option value="115">	울릉도	</option>
                    <option value="152">	울산	</option>
                    <option value="130">	울진	</option>
                    <option value="114">	원주	</option>
                    <option value="263">	의령군	</option>
                    <option value="278">	의성	</option>
                    <option value="203">	이천	</option>
                    <option value="211">	인제	</option>
                    <option value="112">	인천	</option>
                    <option value="244">	임실	</option>
                    <option value="248">	장수	</option>
                    <option value="260">	장흥	</option>
                    <option value="146">	전주	</option>
                    <option value="217">	정선군	</option>
                    <option value="245">	정읍	</option>
                    <option value="184">	제주	</option>
                    <option value="221">	제천	</option>
                    <option value="268">	진도군	</option>
                    <option value="192">	진주	</option>
                    <option value="155">	창원	</option>
                    <option value="232">	천안	</option>
                    <option value="95">		철원	</option>
                    <option value="276">	청송군	</option>
                    <option value="131">	청주	</option>
                    <option value="135">	추풍령	</option>
                    <option value="101">	춘천	</option>
                    <option value="127">	충주	</option>
                    <option value="216">	태백	</option>
                    <option value="162">	통영	</option>
                    <option value="99">		파주	</option>
                    <option value="138">	포항	</option>
                    <option value="264">	함양군	</option>
                    <option value="285">	합천	</option>
                    <option value="261">	해남	</option>
                    <option value="177">	홍성	</option>
                    <option value="212">	홍천	</option>
                    <option value="169">	흑산도	</option>
                </select>
                <input type="date"
                    id="date"
                    max="2023-06-20"
                    min="2008-06-05"
                    value="2023-02-15">
                </input>
            </div>
            {categories.map(c => (
                <Category key={c.name}
                    to={c.name === 'all' ? '/' : `/${c.name}`}>{c.text}</Category>
            ))}
        </CategoriesBlock>
    );
}

export default Categories;