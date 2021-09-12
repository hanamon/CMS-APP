import { useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import MypageNav from '../components/MypageNav';
import MypagePosts from './MypagePosts';
import MypageProfile from './MypageProfile';

function Mypage({ loginState }) {
  const history = useHistory();
  
  useEffect(() => {
    if( !loginState ) history.push('/login');
  }, []);

  return (
    <div>
      <h2>마이페이지</h2>
      <MypageNav />
      <Switch>
        <Route exact path="/mypage/dashboard">
          대시보드
        </Route>
        <Route path="/mypage/posts">
          <MypagePosts />
        </Route>
        <Route exact path="/mypage/comments">
          댓글
        </Route>
        <Route exact path="/mypage/profile">
          <MypageProfile />
        </Route>
        <Route exact path="/mypage/account">
          계정
        </Route>
      </Switch>
    </div>
  );
}

export default Mypage;
