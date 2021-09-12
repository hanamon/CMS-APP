import axios from 'axios';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components'

function Hanamon() {
  const state = useSelector((state) => state.accessTokenReducer);
  const [loadingState, setLoadingState] = useState(null);
  const [userInfoState, setUserInfoState] = useState({
    user_login: '',
    user_email: '',
    user_name: '',
    user_nickname: '',
    user_role: '',
    createdAt: '',
    post_count: 0
  });

  useEffect(() => {
    axios.get(
      'http://localhost:4000/hanamon',
      { headers: { authorization: `accessToken ${state.value}` }, withCredentials: true }
    )
    .then((res) => {
      const { userInfo, posts } = res.data.data;
      console.log(posts);
      setUserInfoState({ ...userInfo, post_count: posts.count });
      setLoadingState('ok');
    })
    .catch((err) => console.log(err));
  }, []);

  return (
    loadingState
    ? (
      <div>
        <h3>프로필</h3>
        <ul>
          <li>아이디 : {userInfoState.user_login}</li>
          <li>닉네임 : {!userInfoState.user_nickname ? '닉네임이 없습니다.' : userInfoState.user_nickname}</li>
          <li>작성글 : {userInfoState.post_count} 개</li>
        </ul>
      </div>
    )
    : null
  );
}

export default Hanamon;
