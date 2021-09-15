import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import H1 from '../heading/H1';

const PostWrapper = styled.div`
  padding: 15px;
  background-color: aqua;
  `;

const PostMeta = styled.div`
  padding: 15px;
  background-color: pink;
`;

const PostContent = styled.div`
  padding: 15px;
  background-color: white;
`;

function Post() {
  const { userId, postPath } = useParams();
  const [postState, setPostState] = useState({});

  useEffect(() => {
    const endpoint = 'http://localhost:4000/posts/' + userId + '/' + postPath;
    axios.get(endpoint)
    .then((res) => {
      const { posts } = res.data.data;
      setPostState(posts.rows[0]);
    })
    .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <H1>{postState.post_title}</H1>
      <PostWrapper>
        <PostMeta>
          <span>작성자 <Link to={'/' + postState['User.user_login']}>{postState['User.user_display']}</Link></span>
          <span>작성일 {new Date(postState.post_created).toLocaleDateString('ko-KR', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
        </PostMeta>
        <PostContent>
          {postState.post_content}
        </PostContent>
      </PostWrapper>
    </div>
  );
}

export default Post;
