import styled from 'styled-components';
import MypagePostsTapButton from './MypagePostsTapButton';

const TapWrapper = styled.div`
  background-color: goldenrod;
`;

const TapUl = styled.ul`
  padding: 15px;
`;

const TapLi = styled.li`
  display: inline-block;
`;

function MypagePostsTap({ postsRequestHandler }) {
  return (
    <TapWrapper>
      <TapUl>
        <TapLi><MypagePostsTapButton onClick={postsRequestHandler} name="all">전체</MypagePostsTapButton></TapLi>
        <TapLi><MypagePostsTapButton onClick={postsRequestHandler} name="post">블로그</MypagePostsTapButton></TapLi>
        <TapLi><MypagePostsTapButton onClick={postsRequestHandler} name="project">프로젝트</MypagePostsTapButton></TapLi>
        <TapLi><MypagePostsTapButton onClick={postsRequestHandler} name="artwork">작업</MypagePostsTapButton></TapLi>
      </TapUl>
    </TapWrapper>
  );
}

export default MypagePostsTap;
