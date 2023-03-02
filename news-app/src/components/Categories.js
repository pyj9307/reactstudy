import styled, {css} from 'styled-components';

// 전체보기, business, entertainment, health, science, sports, technology
const categories = [
    { name : 'all' , text : '전체보기' },
    { name : 'business' , text : '비지니스' },
    { name : 'entertainment' , text : '엔터테인먼트' },
    { name : 'health' , text : '건강' },
    { name : 'science' , text : '과학' },
    { name : 'sports' , text : '스포츠' },
    { name : 'technology' , text : '기술' }
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

// 스타일이 적용된 div태그에 선택한 카테고리의 스타일 변경 
const Category = styled.div`
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

    // styled-components는 내부적으로 props를 받을수 있고,
    // props에 따라서 스타일을 변경 할 수 있다.
    // props.active && -> props.active 가 true일 때
    ${props => 
    props.active && css`
        font-weight: 600; border-bottom : 2px solid #22b8cf; color : #22b8cf;
        &:hover{
            color: #3bc9db;
        }
    `}
`;

const Categories = ({onSelect, category}) => {
    return (
        <CategoriesBlock>
            {categories.map(c => (
                <Category key={c.name} active={category === c.name}
                    onClick={()=> onSelect(c.name)}>{c.text}</Category>
            ))}
        </CategoriesBlock>
    );
}

export default Categories;