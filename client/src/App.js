import axios from 'axios';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { updateAccessToken } from './actions/authAction';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Project from './pages/Project';
import ArtWork from './pages/ArtWork';
import Login from './pages/Login';
import Logout from './pages/Logout';
import Signup from './pages/Signup';
import Mypage from './pages/Mypage';
import Profile from './pages/Profile';
import Admin from './pages/Admin';
import NotFound from './pages/NotFound';
import SinglePost from './pages/SinglePost';

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
      const result = await axios.get('http://localhost:4000/logout', { withCredentials: true });
      if( result ) setLoginState(false);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    axios.get('http://localhost:4000/login', { withCredentials: true })
      .then((res) => {
        const { accessToken } = res.data.data;
        dispatch(updateAccessToken(accessToken));
        issueAccessToken(accessToken);
        isLogin();
        setLoadingState('ok');
      })  
      .catch((err) => {
        setLoadingState('ok');
      });
  }, []);

  return (
    loadingState
    ? (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route path="/signup" exact>
              <Signup loginState={loginState} />
            </Route>
            <Route path="/login" exact>
              <Login isLogin={isLogin} loginState={loginState} />
            </Route>
            <Route path="/logout" exact>
              { !loginState ? <Redirect to="/" /> : <Logout isLogout={isLogout} /> }
            </Route>
            <Route path="/mypage">
              { !loginState ? <Redirect to="/login" /> : <Mypage loginState={loginState} /> }
            </Route>
            <Route path="/admin">
              { !loginState ? <Redirect to="/login" /> : <Admin /> }
            </Route>
            <Route path="/" exact children={<Home />} />
            <Route path="/404" exact children={<NotFound />} />
            <Route path="/search">검색 결과</Route>
            <Route path="/blog" children={<Blog />} />
            <Route path="/project" children={<Project />} />
            <Route path="/artwork" children={<ArtWork />} />
            <Route path="/:userId" exact children={<Profile />} />
            <Route path="/:userId/:postPath" children={<SinglePost />} />
          </Switch>
        </div>
      </BrowserRouter>
    )
    : null
  );
}

export default App;
