import styled from 'styled-components';
import MyPostStatusTapButton from './MyPostStatusTapButton';

const TapWrapper = styled.div`
  background-color: whitesmoke;
`;

const TapUl = styled.ul`
  padding: 15px;
`;

const TapLi = styled.li`
  display: inline-block;
`;

function MyPostStatusTap({ postsRequestHandler, postTypeState }) {
  return (
    <TapWrapper>
      <TapUl>
        <TapLi><MyPostStatusTapButton onClick={postsRequestHandler} postTypeState={postTypeState} name="post_status=all">모두</MyPostStatusTapButton></TapLi>
        <TapLi><MyPostStatusTapButton onClick={postsRequestHandler} postTypeState={postTypeState} name="post_status=publish">공개</MyPostStatusTapButton></TapLi>
        <TapLi><MyPostStatusTapButton onClick={postsRequestHandler} postTypeState={postTypeState} name="post_status=private">비공개</MyPostStatusTapButton></TapLi>
        <TapLi><MyPostStatusTapButton onClick={postsRequestHandler} postTypeState={postTypeState} name="post_status=trash">휴지통</MyPostStatusTapButton></TapLi>
      </TapUl>
    </TapWrapper>
  );
}

export default MyPostStatusTap;
