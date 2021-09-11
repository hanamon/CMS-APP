import React from "react";
import { BrowserRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Nav from './components/Nav';

function App() {
  //const tokenState = useSelector(state => state.tokenReducer);
  //const menusState = useSelector(state => state.menusReducer);
  //const dispatch = useDispatch();

  const issueAccessToken = (token) => {
    // TODO: 로그인 성공 시 실행된다.
    // accessToken의 상태를 저장한다.
  }

  return (
    <BrowserRouter>
      <div className="App">
        <h1>마이 앱</h1>
        <Nav />
      </div>
    </BrowserRouter>
  );
}

export default App;
