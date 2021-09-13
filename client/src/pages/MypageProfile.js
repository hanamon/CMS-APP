import axios from 'axios';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components'

function MypageProfile() {
  const state = useSelector((state) => state.accessTokenReducer);
  const [loadingState, setLoadingState] = useState(null);
  const [userInfoState, setUserInfoState] = useState({
    user_login: '',
    user_email: '',
    user_name: '',
    user_nickname: '',
    user_role: '',
    user_created: '',
  });

  useEffect(() => {
    axios.get(
      'http://localhost:4000/mypage/profile',
      { headers: { authorization: `accessToken ${state.value}` }, withCredentials: true }
    )
    .then((res) => {
      const { userInfo } = res.data.data;
      setUserInfoState({ ...userInfo });
      setLoadingState('ok');
    })
    .catch((err) => console.log(err));
  }, []);

  return (
    loadingState
    ? (
      <div>
        <h3>프로필</h3>
        <div><Link to={'/' + userInfoState.user_login}>내프로필 보기</Link></div>
        <ul>
          <li>아이디 : {userInfoState.user_login}</li>
          <li>이메일 : {userInfoState.user_email}</li>
          <li>이름 : {userInfoState.user_name}</li>
          <li>닉네임 : {!userInfoState.user_nickname ? '닉네임이 없습니다.' : userInfoState.user_nickname}</li>
          <li>{userInfoState.user_role} 회원</li>
          <li>{userInfoState.user_created} 가입</li>
        </ul>
      </div>
    )
    : null
  );
}

export default MypageProfile;
