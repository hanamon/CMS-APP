import axios from 'axios';
import styled from 'styled-components';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
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

function Signup({ loginState }) {
  const history = useHistory();

  const [inputState, setInputState] = useState({
    name: '',
    email: '',
    userId: '',
    password: ''
  });

  const inputHandler = (e) => {
    setInputState({
      ...inputState,
      [e.target.name]: e.target.value
    });
  }

  const signupRequestHandler = async () => {
    const { name, userId, password, email } = inputState;
    try {
      const result = await axios.post(
        'http://localhost:4000/signup',
        { user_login: userId, user_pass: password, user_name: name, user_email: email },
        { withCredentials: true }
      );
      const { userInfo } = result.data.data;
      history.push('/login');
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <Header />
      <Main>
        <H1>회원가입</H1>
        {
          ! loginState
          ? (
            <Wrapper>
              <AuthContainer>
                <InputWithLabel onChange={inputHandler} label="이메일" type="text" name="email" placeholder="이메일을 입력하세요." />
                <InputWithLabel onChange={inputHandler} label="아이디" type="text" name="userId" placeholder="아이디를 입력하세요." />
                <InputWithLabel onChange={inputHandler} label="비밀번호" type="password" name="password" placeholder="비밀번호를 입력하세요." />
                <InputWithLabel onChange={inputHandler} label="이름" type="text" name="name" placeholder="성함을 입력하세요." />
                <AuthButton onClick={signupRequestHandler}>회원가입</AuthButton>
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

export default Signup;
