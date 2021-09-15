import axios from 'axios';
import styled from 'styled-components'
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import H2 from '../components/heading/H2';

const Wrapper = styled.div`
  padding: 15px;
  background-color: pink;
`;

const Ul = styled.ul`
  padding: 15px;
  //background-color: white;
`;

const Li = styled.li`
  font-size: 1.2rem;
  font-weight: 500;
  line-height: 160%;
`;

const ProfileBtnWrap = styled.div`
  padding: 15px;
`;

const ProfileBtn = styled(Link)`
  display: inline-block;
  padding: 15px 30px;
  font-size: 1.2rem;
  color: white;
  background-color: purple;
`;

function MypageProfile() {
  const state = useSelector((state) => state.accessTokenReducer);
  const [userInfoState, setUserInfoState] = useState({});

  useEffect(() => {
    axios.get(
      'http://localhost:4000/mypage/profile',
      { headers: { authorization: `accessToken ${state.value}` }, withCredentials: true }
    )
    .then((res) => {
      const { userInfo } = res.data.data;
      setUserInfoState(userInfo);
    })
    .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <H2>프로필 설정</H2>
      <Wrapper>
        <Ul>
          <Li>이름 : {userInfoState.user_name}</Li>
          <Li>아이디 : {userInfoState.user_login}</Li>
          <Li>이메일 : {userInfoState.user_email}</Li>
          <Li>닉네임 : {!userInfoState.user_nickname ? '닉네임이 없습니다.' : userInfoState.user_nickname}</Li>
          <Li>공개이름 : {userInfoState.user_display}</Li>
          <Li>가입일자 : {new Date(userInfoState.user_created).toLocaleDateString('ko-KR', { year: 'numeric', month: 'long', day: 'numeric' })}</Li>
        </Ul>
        <ProfileBtnWrap>
          <ProfileBtn to={'/' + userInfoState.user_login}>내프로필 보기</ProfileBtn>
        </ProfileBtnWrap>
      </Wrapper>
    </div>
  );
}

export default MypageProfile;
