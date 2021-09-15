import axios from 'axios';
import styled from 'styled-components';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { updateAccessToken } from '../actions/authAction';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Main from '../components/layout/Main';
import H1 from '../components/heading/H1';
import AuthContainer from '../components/auth/AuthContainer';
import InputWithLabel from '../components/auth/InputWithLabel';
import AuthButton from '../components/auth/AuthButton';

const Wrapper = styled.div`
  padding: 30px;
  background-color: aqua;
`;

function Login({ isLogin, loginState }) {
  const state = useSelector((state) => state.accessTokenReducer);
  const history = useHistory();
  const dispatch = useDispatch();

  const [inputState, setInputState] = useState({
    userId: '',
    password: ''
  });

  const inputHandler = (e) => {
    setInputState({
      ...inputState,
      [e.target.name]: e.target.value
    });
  }

  const loginRequestHandler = async () => {
    try {
      const result = await axios.post(
        'http://localhost:4000/login',
        { user_login: inputState.userId, user_pass: inputState.password },
        { headers: { authorization: `accessToken ${state.value}` }, withCredentials: true }
      );
      const { accessToken } = result.data.data;
      dispatch(updateAccessToken(accessToken));
      isLogin();
      history.push('/mypage');
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
    <Header />
      <Main>
        <H1>로그인</H1>
        {
          ! loginState
          ? (
            <Wrapper>
              <AuthContainer>
                <InputWithLabel onChange={inputHandler} label="아이디" type="text" name="userId" placeholder="아이디를 입력하세요." />
                <InputWithLabel onChange={inputHandler} label="비밀번호" type="password" name="password" placeholder="비밀번호를 입력하세요." />
                <AuthButton onClick={loginRequestHandler}>로그인</AuthButton>
              </AuthContainer>
            </Wrapper>
          )
          : <Wrapper>이미 로그인되었습니다.</Wrapper>
        }
      </Main>
    <Footer />
    </>
  );
}

export default Login;
