import axios from 'axios';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components'

function Post() {
  const { userId, postPath } = useParams();
  const [postState, setPostState] = useState({});
  const [userInfoState, setUserInfoState] = useState({});

  useEffect(() => {
    const endpoint = 'http://localhost:4000/' + userId + '/' + postPath;
    axios.get(endpoint)
    .then((res) => {
      const { posts, userInfo } = res.data.data;
      console.log(posts);
      console.log(userInfo);
      setPostState({ ... posts });
      setUserInfoState({ ...userInfo });
    })
    .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h2>{postState.post_title}</h2>
      <p>작성자 <Link to={'/' + userInfoState.user_login}>{userInfoState.user_name}</Link></p>
      <p>작성일 {postState.post_created}</p>
      <div>{postState.post_content}</div>
    </div>
  );
}

export default Post;
