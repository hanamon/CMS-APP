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
`;

const Li = styled.li`
  font-size: 1.2rem;
  font-weight: 500;
  line-height: 160%;
`;

const ProfileBtnWrap = styled.div`
  padding: 15px;
`;

const ProfileLink = styled(Link)`
  display: inline-block;
  padding: 15px 30px;
  font-size: 1.2rem;
  color: white;
  background-color: purple;
`;

const ProfileUpdateBtn = styled.button`
  display: inline-block;
  padding: 15px 30px;
  font-size: 1.2rem;
  color: white;
  background-color: purple;
`;

function MypageProfile() {
  const state = useSelector((state) => state.accessTokenReducer);
  const [userInfoState, setUserInfoState] = useState({});
  /*const [passwordState, setPasswordState] = useState({
    pass: '',
    passCheck: ''
  });*/

  const getUserProfile = () => {
    axios.get(
      'http://localhost:4000/mypage/profile',
      { headers: { authorization: `accessToken ${state.value}` }, withCredentials: true }
    )
    .then((res) => {
      const { userInfo } = res.data.data;
      setUserInfoState(userInfo);
    })
    .catch((err) => console.log(err));
  }

  const putUserProfile = async () => {
    // TODO: PUT 요청
    axios.put(
      'http://localhost:4000/mypage/profile',
      { user_login: userInfoState.user_login, user_nickname: userInfoState.user_nickname },
      { headers: { authorization: `accessToken ${state.value}` }, withCredentials: true }
    )
    .then((res) => {
      console.log(res.data.data);
    })
    .catch((err) => {
      console.log(err);
    })
  }

  const validationCheck = () => {
    // TODO: 유효성 검사
    putUserProfile();
  }

  const inputChangeHandler = (e) => {
    setUserInfoState({
      ...userInfoState,
      [e.target.name]:  e.target.value
    })
  }

  useEffect(() => {
    getUserProfile();
  }, []);

  return (
    <div>
      <H2>프로필 설정</H2>
      <Wrapper>
        <Ul>
          <Li>
            아이디 : {userInfoState.user_login}
          </Li>
          <Li>
            닉네임 : <input onChange={inputChangeHandler} name="user_nickname" value={userInfoState.user_nickname} placeholder="닉네임이 없습니다." />
          </Li>
          <Li>
            이메일 : {userInfoState.user_email}
          </Li>
          {/*<Li>
            비밀번호 변경 : <input type="password" />
          </Li>
          <Li>
            비밀번호 변경 확인 : <input type="password" />
          </Li>*/}
        </Ul>
        <ProfileBtnWrap>
          {/*<ProfileLink to={'/' + userInfoState.user_login}>내프로필 보기</ProfileLink>*/}
          <ProfileUpdateBtn onClick={validationCheck}>프로필 수정</ProfileUpdateBtn>
        </ProfileBtnWrap>
      </Wrapper>
    </div>
  );
}

export default MypageProfile;
