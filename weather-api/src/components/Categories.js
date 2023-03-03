import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

// 전체보기, business, entertainment, health, science, sports, technology
const categories = [
    { name: '159', text: '부산' },
    { name: '108', text: '서울' },
    { name: '112', text: '인천' },
    { name: '165', text: '목포' },
    { name: '184', text: '제주' },
    { name: '143', text: '대구' },
    { name: '102', text: '백령도' },
    { name: '152', text: '울산' },
    { name: '239', text: '세종' }
];

const CategoriesBlock = styled.div`
    display: flex;
    padding: 1rem;
    width: 768px;
    margin: 0 auto;
    @media screen and (max-width: 768px) {
        width: 100%;
        overflow-x: auto;
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
    return (
        <CategoriesBlock>
            {categories.map(c => (
                <Category key={c.name}
                    to={c.name === 'all' ? '/' : `/${c.name}`}>{c.text}</Category>
            ))}
        </CategoriesBlock>
    );
}

export default Categories;