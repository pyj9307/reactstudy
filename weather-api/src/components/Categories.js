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
        width:100px; height:30px; margin-right: 30px; font-size:17px;
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

    const [selectValue, setSelectValue] = useState('90');
    const onChangeRegion = (e) => {
        setSelectValue(e.target.value);
        console.log(e.target.value);
    };

    const categories = [
        { name: {selectValue}, text: '지역' }
        // { name: '108', text: '서울' },
        // { name: '112', text: '인천' },
        // { name: '165', text: '목포' },
        // { name: '184', text: '제주' },
        // { name: '143', text: '대구' },
        // { name: '102', text: '백령도' },
        // { name: '152', text: '울산' },
        // { name: '239', text: '세종' }
    ];

    return (
        <CategoriesBlock>

            <div>
                <select value={selectValue} onChange={(e) => onChangeRegion(e)}>
                    <option value="90">	    강릉	</option>
                    <option value="93">	    강진군	</option>
                    <option value="95">	    강화	</option>
                    <option value="98">	    거제	</option>
                    <option value="99">	    거창	</option>
                    <option value="100">	경주시	</option>
                    <option value="101">	고산	</option>
                    <option value="102">	고창	</option>
                    <option value="104">	고창군	</option>
                    <option value="105">	고흥	</option>
                    <option value="106">	광양시	</option>
                    <option value="108">	광주	</option>
                    <option value="112">	구미	</option>
                    <option value="114">	군산	</option>
                    <option value="115">	금산	</option>
                    <option value="119">	김해시	</option>
                    <option value="121">	남원	</option>
                    <option value="127">	남해	</option>
                    <option value="129">	대관령	</option>
                    <option value="130">	대구	</option>
                    <option value="131">	대전	</option>
                    <option value="133">	동두천	</option>
                    <option value="135">	동해	</option>
                    <option value="136">	목포	</option>
                    <option value="137">	문경	</option>
                    <option value="138">	밀양	</option>
                    <option value="140">	백령도	</option>
                    <option value="143">	보령	</option>
                    <option value="146">	보성군	</option>
                    <option value="152">	보은	</option>
                    <option value="155">	봉화	</option>
                    <option value="156">	부산	</option>
                    <option value="159">	부안	</option>
                    <option value="162">	부여	</option>
                    <option value="165">	북강릉	</option>
                    <option value="168">	북창원	</option>
                    <option value="169">	북춘천	</option>
                    <option value="170">	산청	</option>
                    <option value="172">	상주	</option>
                    <option value="174">	서귀포	</option>
                    <option value="177">	서산	</option>
                    <option value="184">	서울	</option>
                    <option value="185">	성산	</option>
                    <option value="188">	세종	</option>
                    <option value="189">	속초	</option>
                    <option value="192">	수원	</option>
                    <option value="201">	순창군	</option>
                    <option value="202">	순천	</option>
                    <option value="203">	안동	</option>
                    <option value="211">	양산시	</option>
                    <option value="212">	양평	</option>
                    <option value="216">	여수	</option>
                    <option value="217">	영광군	</option>
                    <option value="221">	영덕	</option>
                    <option value="226">	영월	</option>
                    <option value="232">	영주	</option>
                    <option value="235">	영천	</option>
                    <option value="236">	완도	</option>
                    <option value="238">	울릉도	</option>
                    <option value="239">	울산	</option>
                    <option value="243">	울진	</option>
                    <option value="244">	원주	</option>
                    <option value="245">	의령군	</option>
                    <option value="247">	의성	</option>
                    <option value="248">	이천	</option>
                    <option value="251">	인제	</option>
                    <option value="252">	인천	</option>
                    <option value="253">	임실	</option>
                    <option value="254">	장수	</option>
                    <option value="255">	장흥	</option>
                    <option value="257">	전주	</option>
                    <option value="258">	정선군	</option>
                    <option value="259">	정읍	</option>
                    <option value="260">	제주	</option>
                    <option value="261">	제천	</option>
                    <option value="262">	진도군	</option>
                    <option value="263">	진주	</option>
                    <option value="264">	창원	</option>
                    <option value="266">	천안	</option>
                    <option value="268">	철원	</option>
                    <option value="271">	청송군	</option>
                    <option value="272">	청주	</option>
                    <option value="273">	추풍령	</option>
                    <option value="276">	춘천	</option>
                    <option value="277">	충주	</option>
                    <option value="278">	태백	</option>
                    <option value="279">	통영	</option>
                    <option value="281">	파주	</option>
                    <option value="283">	포항	</option>
                    <option value="284">	함양군	</option>
                    <option value="285">	합천	</option>
                    <option value="288">	해남	</option>
                    <option value="289">	홍성	</option>
                    <option value="294">	홍천	</option>
                    <option value="295">	흑산도	</option>
                </select>
            </div>
            {categories.map(c => (
                <Category key={c.name}
                    to={c.name === 'all' ? '/' : `/${c.name}`}>{c.text}</Category>
            ))}
        </CategoriesBlock>
    );
}

export default Categories;