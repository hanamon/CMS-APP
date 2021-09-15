import axios from 'axios';
import styled from 'styled-components'
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import H2 from '../components/heading/H2';
import MyPostTypeTab from '../components/mypage/MyPostTypeTab';
import MyPostStatusTab from '../components/mypage/MyPostStatusTab';

const PostWrapper = styled.div`
  background-color: pink;
`;

const PostUl = styled.ul`
  padding: 7.5px;
`;

const PostLi = styled.li`
  padding: 7.5px;
`;

const PostLink = styled(Link)`
  display: block;
  padding: 15px;
  border: 1px solid #000;
  background-color: white;
`;

const PostCountWrap = styled.div`
  padding: 5px 20px;
  text-align: right;
  background-color: tomato;
`;

const TextWrapper = styled.div`
  padding: 30px;
  background-color: pink;
`;

function MypagePosts() {
  const state = useSelector((state) => state.accessTokenReducer);
  const [postsState, setPostsState] = useState([]);
  const [postCountState, setPostCountState] = useState(0);
  const [postTypeState, setPostTypeState] = useState('');
  const [postStatusState, setPostStatusState] = useState('');
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
        setPostStatusState(e.target.name);
        if( !postTypeState ) postStatus = '?' + e.target.name;
        else {
          postType = '?' + postTypeState;
          postStatus = '&' + e.target.name;
        }
      }
      
      const endpoint = 'http://localhost:4000/mypage/posts' + postType + postStatus;
      const result = await axios.get(endpoint, { headers: { authorization: `accessToken ${state.value}` }, withCredentials: true });
      const { posts } = result.data.data;
      setPostsState(posts.rows);
      setPostCountState(posts.count);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    const url = new URL(window.location.href);
    const currentPostType = url.searchParams.get('post_type') || 'all';
    const currentPostStatus = url.searchParams.get('post_status') || 'all';

    setPostTypeState('post_type=' + currentPostType);
    setPostStatusState('post_status=' + currentPostStatus);

    let endpoint = 'http://localhost:4000/mypage/posts';
    if( currentPostType && currentPostStatus ) {
      endpoint = 'http://localhost:4000/mypage/posts?post_type=' + currentPostType + '&post_status=' + currentPostStatus;
    }
    else if( currentPostType && !currentPostStatus ) {
      endpoint = 'http://localhost:4000/mypage/posts?post_type=' + currentPostType;
    }
    else if( !currentPostType && currentPostStatus ) {
      endpoint = 'http://localhost:4000/mypage/posts?post_status=' + currentPostStatus;
    }

    axios.get(endpoint, { headers: { authorization: `accessToken ${state.value}` }, withCredentials: true })
      .then((res) => {
        const { posts, userInfo } = res.data.data;
        setPostsState(posts.rows);
        setPostCountState(posts.count);
        setUserInfoState(userInfo);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
      <div>
        <H2>게시글</H2>
        <MyPostTypeTab postsRequestHandler={postsRequestHandler} postTypeState={postTypeState} />
        <MyPostStatusTab postsRequestHandler={postsRequestHandler} postTypeState={postTypeState} postStatusState={postStatusState} />
        <PostCountWrap><span>총 : {postCountState}개</span></PostCountWrap>
        {
          ! postCountState
          ? <TextWrapper>비었습니다.</TextWrapper>
          : (
            <PostWrapper>
              <PostUl>
                {
                  postsState.map((post) => {
                    return (
                      <PostLi key={post.post_id}>
                        <article>
                          <PostLink to={'/'+ userInfoState.user_login + '/' + post.post_path}>
                            <h4>{post.post_title}</h4>
                            <p>{post.post_content}</p>
                            <span>{post.post_created}</span>
                          </PostLink>
                        </article>
                      </PostLi>   
                    )
                  })
                }
              </PostUl>
            </PostWrapper>
          )
        }
      </div>
  );
}

export default MypagePosts;
