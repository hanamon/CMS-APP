import axios from 'axios';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import MypagePostsTap from '../components/MypagePostsTap';

const PostWrapper = styled.div`
  background: pink;
`;

const PostUl = styled.ul`
  padding: 15px;
  margin: 15px;
  background-color: aqua;
`;

const PostLi = styled.li`
  margin: 15px;
  border: 1px solid #000;
`;

const PostLink = styled(Link)`
  display: block;
  padding: 15px;
`;

function MypagePosts() {
  const state = useSelector((state) => state.accessTokenReducer);
  const [postsState, setPostsState] = useState([]);
  const [postCountState, setPostCountState] = useState(0);
  const [loadingState, setLoadingState] = useState(null);

  const postsRequestHandler = async (e) => {
    try {
      const { pathname, search } = new URL(window.location.href);
      const postType = e.target.name !== 'all' ? '?post_type=' + e.target.name : '';
      const endpoint = !search ? 'http://localhost:4000' + pathname + postType : 'http://localhost:4000' + pathname + search + '&' + postType;
      
      const result = await axios.get(
        endpoint,
        { headers: { authorization: `accessToken ${state.value}` }, withCredentials: true }
      );

      const { posts } = result.data.data;
      setPostsState(posts.rows);
      setPostCountState(posts.count);
    }
    catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    axios.get(
      'http://localhost:4000/mypage/posts',
      { headers: { authorization: `accessToken ${state.value}` }, withCredentials: true }
    )
    .then((res) => {
      const { posts } = res.data.data;
      setPostsState(posts.rows);
      setPostCountState(posts.count);
      setLoadingState('ok');
    })
    .catch((err) => console.log(err));
  }, []);

  return (
    loadingState
    ? (
      <div>
        <h3>게시글</h3>
        작성하신 게시글입니다.
        총 : {postCountState}
        <PostWrapper>
          <MypagePostsTap postsRequestHandler={postsRequestHandler}/>
          <PostUl>
            {
              ! postCountState
              ? <div>게시글을 작성해보세요.</div>
              : (
                postsState.map((post) => {
                  return (
                    <PostLi key={post.id}>
                      <article>
                        <PostLink to={'/'+post.post_path}>
                          <h4>{post.post_title}</h4>
                          <p>{post.post_content}</p>
                          <span>{post.createdAt}</span>
                        </PostLink>
                      </article>
                    </PostLi>   
                  )
                })
              )
            }
          </PostUl>
        </PostWrapper>
      </div>
    )
    : null
  );
}

export default MypagePosts;
