import styled from 'styled-components';
import MyPostTypeTapButton from './MyPostTypeTapButton';

const TapWrapper = styled.div`
  background-color: goldenrod;
`;

const TapUl = styled.ul`
  padding: 15px;
`;

const TapLi = styled.li`
  display: inline-block;
`;

function MyPostTypeTap({ postsRequestHandler, postTypeState }) {
  return (
    <TapWrapper>
      <TapUl>
        <TapLi><MyPostTypeTapButton onClick={postsRequestHandler} postTypeState={postTypeState} name="post_type=all">전체</MyPostTypeTapButton></TapLi>
        <TapLi><MyPostTypeTapButton onClick={postsRequestHandler} postTypeState={postTypeState} name="post_type=post">블로그</MyPostTypeTapButton></TapLi>
        <TapLi><MyPostTypeTapButton onClick={postsRequestHandler} postTypeState={postTypeState} name="post_type=project">프로젝트</MyPostTypeTapButton></TapLi>
        <TapLi><MyPostTypeTapButton onClick={postsRequestHandler} postTypeState={postTypeState} name="post_type=artwork">작업</MyPostTypeTapButton></TapLi>
      </TapUl>
    </TapWrapper>
  );
}

export default MyPostTypeTap;
