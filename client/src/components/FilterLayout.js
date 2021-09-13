import { Link } from 'react-router-dom';
import styled from 'styled-components';
import FilterSearchBox from './FilterSearchBox';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content:space-between;
  margin: 15px;
  padding: 15px;
  background-color: burlywood;
`;

const FileterButtonBox = styled.div`
  background-color: whitesmoke;
`;

const FilterUl = styled.ul`

`;

const FilterLi = styled.li`
  display: inline-block;
`;

const FilterLink = styled(Link)`
  display: block;
  padding: 5px;
  margin: 5px;
  color: #ffffff;
  background-color: tomato;
`;

function FilterLayout({ categoryState, categoryHandle, postsHandle, pagePath, postType }) {
  return (
    <Wrapper>
      <FileterButtonBox>
        <FilterUl>
          <FilterLi><FilterLink onClick={(e) => categoryHandle(e)} to={'/' + pagePath} name="all">전체보기</FilterLink></FilterLi>
          {
            categoryState.map((category, idx) => {
              return (
                <FilterLi key={idx}>
                  <FilterLink onClick={(e) => categoryHandle(e)} name={category['Term.term_path']} to={'/' + pagePath + '/category/' + category['Term.term_path']}>{category['Term.term_name']}</FilterLink>
                </FilterLi>
              )
            })
          }
        </FilterUl>
      </FileterButtonBox>
      <FilterSearchBox postsHandle={postsHandle} postType={postType} />
    </Wrapper>
  );
}

export default FilterLayout;
