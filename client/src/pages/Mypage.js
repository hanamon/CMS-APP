import styled from 'styled-components';
import { useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Main from '../components/layout/Main';
import H1 from '../components/heading/H1';
import MypageNav from '../components/mypage/MypageNav';
import MypagePosts from './MypagePosts';
import MypageProfile from './MypageProfile';

const Wrapper = styled.main`
  display: flex;
  background-color: maroon;
`;

const SubWrapper = styled.div`
  flex: 1;
  padding: 30px;
  background-color: aqua;
`;

function Mypage({ loginState }) {
  const history = useHistory();
  
  useEffect(() => {
    if( !loginState ) history.push('/login');
  }, []);

  return (
    <>
      <Header />
        <Main>
          <H1>마이페이지</H1>
          <Wrapper>
            <MypageNav />
            <SubWrapper>
              <Switch>
                <Route exact path="/mypage">대시보드</Route>
                <Route exact path="/mypage/dashboard">대시보드</Route>
                <Route path="/mypage/posts" children={<MypagePosts />} />
                <Route exact path="/mypage/comments">댓글</Route>
                <Route exact path="/mypage/profile" children={<MypageProfile />} />
                <Route exact path="/mypage/account">계정</Route>
              </Switch>
            </SubWrapper>
          </Wrapper>
        </Main>
      <Footer />
    </>
  );
}

export default Mypage;
