import axios from 'axios';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components'
import MyPostTypeTap from '../components/MyPostTypeTap';
import MyPostStatusTap from '../components/MyPostStatusTap';

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
  const location = useLocation();
  const [postsState, setPostsState] = useState([]);
  const [postCountState, setPostCountState] = useState(0);
  const [loadingState, setLoadingState] = useState(null);
  const [postTypeState, setPostTypeState] = useState('');
  const [userInfoState, setUserInfoState] = useState({});

  const postsRequestHandler = async (e) => {
    try {
      const query = e.target.name.split('=');

      let postType = '';
      let postStatus = '';

      if( query[0] === 'post_type' ) {
        setPostTypeState(e.target.name);
        postType = '?' + e.target.name;
      }
      if( query[0] === 'post_status' ) {
        if( !postTypeState ) postStatus = '?' + e.target.name;
        else {
          postType = '?' + postTypeState;
          postStatus = '&' + e.target.name;
        }
      }
      
      const endpoint = 'http://localhost:4000/mypage/posts' + postType + postStatus;
      //console.log(endpoint);
      const result = await axios.get(endpoint, { headers: { authorization: `accessToken ${state.value}` }, withCredentials: true });
      const { posts } = result.data.data;
      setPostsState(posts.rows);
      setPostCountState(posts.count);
    }
    catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    const url = new URL(window.location.href);
    const currentPostType = url.searchParams.get('post_type') || 'all';
    setPostTypeState('post_type=' + currentPostType);

    axios.get(
      'http://localhost:4000/mypage/posts',
      { headers: { authorization: `accessToken ${state.value}` }, withCredentials: true }
    )
    .then((res) => {
      const { posts, userInfo } = res.data.data;
      setPostsState(posts.rows);
      setPostCountState(posts.count);
      setUserInfoState({ ...userInfo });
      setLoadingState('ok');
    })
    .catch((err) => console.log(err));
  }, []);

  return (
    loadingState
    ? (
      <div>
        <h3>게시글</h3>
        <p>작성하신 게시글입니다.</p>
        <p>총 : {postCountState}</p>
        <PostWrapper>
          <MyPostTypeTap postsRequestHandler={postsRequestHandler} postTypeState={postTypeState} />
          <MyPostStatusTap postsRequestHandler={postsRequestHandler} postTypeState={postTypeState} />
          <PostUl>
            {
              ! postCountState
              ? <div>비었습니다.</div>
              : (
                postsState.map((post) => {
                  return (
                    <PostLi key={post.id}>
                      <article>
                        <PostLink to={'/'+ userInfoState.user_login + '/' + post.post_path}>
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
