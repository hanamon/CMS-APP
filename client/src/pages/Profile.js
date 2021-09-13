import axios from 'axios';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components'

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

function Profile() {
  const state = useSelector((state) => state.accessTokenReducer);
  const [loadingState, setLoadingState] = useState(null);
  const [userInfoState, setUserInfoState] = useState({});
  const [postState, setPostState] = useState({});
  const [postCount, setPostCount] = useState(0);

  useEffect(() => {
    const { pathname } = new URL(window.location.href);

    axios.get('http://localhost:4000/posts' + pathname)
      .then((res) => {
        const { posts } = res.data.data;
        //console.log(posts);
        setPostCount(posts.count);
        setPostState(posts.rows);
        axios.get('http://localhost:4000/users' + pathname)
          .then((res) => {
            const { userInfo } = res.data.data;
            //console.log(userInfo);
            setUserInfoState(userInfo);
            setLoadingState('ok');
          });
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    loadingState
    ? (
      <div>
        <h2>{userInfoState.user_display}님 프로필</h2>
        <ul>
          <li>작성글 : {postCount} 개</li>
        </ul>
        <PostWrapper>
          <PostUl>
            {
              postState.map((post) => {
                return (
                  <PostLi key={post.post_id}>
                    <article>
                      <PostLink to={'/' + userInfoState.user_login + '/' + post.post_path}>
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
      </div>
    )
    : null
  );
}

export default Profile;
