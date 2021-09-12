import axios from 'axios';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { updateAccessToken } from './actions/authAction';
import Nav from './components/Nav';
import Login from './pages/Login';
import Logout from './pages/Logout';
import Signup from './pages/Signup';
import Mypage from './pages/Mypage';

function App() {
  const state = useSelector((state) => state.accessTokenReducer);
  const dispatch = useDispatch();

  const [loginState, setLoginState] = useState(false);
  const [tokenState, setTokenState] = useState('');
  const [loadingState, setLoadingState] = useState(null);
  
  const isLogin = () => {
    setLoginState(true);
  }

  const issueAccessToken = async (accessToken) => {
    setTokenState(accessToken);
  }
  
  const isLogout = async () => {
    try {
      const result = await axios.get(
        'http://localhost:4000/logout',
        { withCredentials: true }
      );
      if( result ) setLoginState(false);
    }
    catch (err) {
      console.log(err);
    }  
  }

  useEffect(() => {
    axios.get('http://localhost:4000/login', { withCredentials: true })
      .then((res) => {
        console.log('토큰 있네...');
        const { accessToken } = res.data.data;
        dispatch(updateAccessToken(accessToken));
        issueAccessToken(accessToken);
        isLogin();
        setLoadingState('ok');
      })  
      .catch((err) => {
        setLoadingState('ok');
        console.log('토큰 없네...')
      });
  }, []);

  return (
    loadingState
    ? (
      <BrowserRouter>
        <div className="App">
          <header>
            <Nav/>
          </header>
          <main>
            <div>로그인 : { loginState ? 'True'  : 'False' }</div>
            <div>토큰 : { tokenState }</div>
            <Switch>
              <Route exact path="/">홈</Route>
              <Route exact path="/blog">블로그</Route>
              <Route exact path="/project">프로젝트</Route>
              <Route exact path="/artwork">작품</Route>
              <Route exact path="/about">소개</Route>
              <Route exact path="/login">
                <Login isLogin={isLogin} loginState={loginState} />
              </Route>
              <Route exact path="/signup">
                <Signup loginState={loginState} />
              </Route>
              <Route exact path="/logout">
                { !loginState ? <Redirect to="/" /> : <Logout isLogout={isLogout} /> }
              </Route>
              <Route path="/mypage">
                { !loginState ? <Redirect to="/login" /> : <Mypage loginState={loginState} /> }
              </Route>
            </Switch>
          </main>
          <footer>
          </footer>
        </div>
      </BrowserRouter>
    )
    : null
  );
}

export default App;
