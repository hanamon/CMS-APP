import styled from 'styled-components';
import MyPostTypeTabButton from './MyPostTypeTabButton';

const TapWrapper = styled.div`
  background-color: goldenrod;
`;

const TapUl = styled.ul`
  padding: 15px;
`;

const TapLi = styled.li`
  display: inline-block;
`;

function MyPostTypeTab({ postsRequestHandler, postTypeState }) {
  return (
    <TapWrapper>
      <TapUl>
        <TapLi><MyPostTypeTabButton onClick={postsRequestHandler} postTypeState={postTypeState} name="post_type=all">전체</MyPostTypeTabButton></TapLi>
        <TapLi><MyPostTypeTabButton onClick={postsRequestHandler} postTypeState={postTypeState} name="post_type=post">블로그</MyPostTypeTabButton></TapLi>
        <TapLi><MyPostTypeTabButton onClick={postsRequestHandler} postTypeState={postTypeState} name="post_type=project">프로젝트</MyPostTypeTabButton></TapLi>
        <TapLi><MyPostTypeTabButton onClick={postsRequestHandler} postTypeState={postTypeState} name="post_type=artwork">작업</MyPostTypeTabButton></TapLi>
      </TapUl>
    </TapWrapper>
  );
}

export default MyPostTypeTab;
