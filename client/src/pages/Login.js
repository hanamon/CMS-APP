import axios from 'axios';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { updateAccessToken } from '../actions/authAction';
import AuthContainer from '../components/AuthContainer';
import InputWithLabel from '../components/InputWithLabel';
import AuthButton from '../components/AuthButton';

function Login({ isLogin, loginState }) {
  const state = useSelector((state) => state.accessTokenReducer);
  const dispatch = useDispatch();
  const history = useHistory();

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
        { headers: { authorization: `token ${state.value}` }, withCredentials: true }
      );
      const { accessToken } = result.data.data;
      dispatch(updateAccessToken(accessToken));
      isLogin();
      history.push('/mypage');
    }
    catch (err) {
      console.log(err);
    }
  }

  return (
    ! loginState
    ? (
      <div>
        <h2>로그인</h2>
        <AuthContainer>
          <InputWithLabel onChange={inputHandler} label="아이디" type="text" name="userId" placeholder="아이디를 입력하세요." />
          <InputWithLabel onChange={inputHandler} label="비밀번호" type="password" name="password" placeholder="비밀번호를 입력하세요." />
          <AuthButton onClick={loginRequestHandler}>로그인</AuthButton>
        </AuthContainer>
        <p>{inputState.userId}</p>
        <p>{inputState.password}</p>
      </div>
    )
    : <div>이미 로그인되었습니다.</div>
  );
}

export default Login;
