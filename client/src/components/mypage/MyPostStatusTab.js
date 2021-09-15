import styled from 'styled-components';
import MyPostStatusTabButton from './MyPostStatusTabButton';

const TapWrapper = styled.div`
  background-color: #ddd;
`;

const TapUl = styled.ul`
  padding: 15px;
`;

const TapLi = styled.li`
  display: inline-block;
`;

function MyPostStatusTab({ postsRequestHandler, postTypeState, postStatusState }) {
  return (
    <TapWrapper>
      <TapUl>
        <TapLi><MyPostStatusTabButton onClick={postsRequestHandler} postTypeState={postTypeState} postStatusState={postStatusState} name="post_status=all">모두</MyPostStatusTabButton></TapLi>
        <TapLi><MyPostStatusTabButton onClick={postsRequestHandler} postTypeState={postTypeState} postStatusState={postStatusState} name="post_status=publish">공개</MyPostStatusTabButton></TapLi>
        <TapLi><MyPostStatusTabButton onClick={postsRequestHandler} postTypeState={postTypeState} postStatusState={postStatusState} name="post_status=private">비공개</MyPostStatusTabButton></TapLi>
        <TapLi><MyPostStatusTabButton onClick={postsRequestHandler} postTypeState={postTypeState} postStatusState={postStatusState} name="post_status=trash">휴지통</MyPostStatusTabButton></TapLi>
      </TapUl>
    </TapWrapper>
  );
}

export default MyPostStatusTab;
