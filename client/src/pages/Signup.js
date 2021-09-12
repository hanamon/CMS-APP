import axios from 'axios';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import AuthContainer from '../components/AuthContainer';
import InputWithLabel from '../components/InputWithLabel';
import AuthButton from '../components/AuthButton';

function Signup({ loginState }) {
  const history = useHistory();

  const [inputState, setInputState] = useState({
    email: '',
    userId: '',
    password: '',
    name: ''
  });

  const inputHandler = (e) => {
    setInputState({
      ...inputState,
      [e.target.name]: e.target.value
    });
  }

  const signupRequestHandler = async () => {
    const { userId, password, email, name } = inputState;
    try {
      const result = await axios.post(
        'http://localhost:4000/signup',
        { user_login: userId, user_pass: password, user_name: name, user_email: email },
        { withCredentials: true }
      );
      const { userInfo } = result.data.data;
      console.log(userInfo);
      history.push('/login');
    }
    catch (err) {
      console.log(err);
    }
  }

  return (
    ! loginState
    ? (
      <div>
        <h2>회원가입</h2>
        <AuthContainer>
          <InputWithLabel onChange={inputHandler} label="이메일" type="text" name="email" placeholder="이메일을 입력하세요." />
          <InputWithLabel onChange={inputHandler} label="아이디" type="text" name="userId" placeholder="아이디를 입력하세요." />
          <InputWithLabel onChange={inputHandler} label="비밀번호" type="password" name="password" placeholder="비밀번호를 입력하세요." />
          <InputWithLabel onChange={inputHandler} label="이름" type="text" name="name" placeholder="성함을 입력하세요." />
          <AuthButton onClick={signupRequestHandler}>회원가입</AuthButton>
        </AuthContainer>
        <p>{inputState.userId}</p>
        <p>{inputState.password}</p>
      </div>
    )
    : <div>이미 로그인되었습니다.</div>
  );
}

export default Signup;
