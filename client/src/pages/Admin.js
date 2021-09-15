import axios from 'axios';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Switch, Route, useHistory } from 'react-router-dom';

function Admin() {
  const state = useSelector((state) => state.accessTokenReducer);
  const history = useHistory();

  useEffect(() => {
    axios.get(
      'http://localhost:4000/admin',
      { headers: { authorization: `accessToken ${state.value}` }, withCredentials: true }
    )
      .then((res) => {
        console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err);
        history.push('/');
      });
  }, []);

  return (
    <div>
      <h2>어드민</h2>
      <Switch>
        <Route path='/admin' exact>대시보드</Route>
        <Route path='/admin/dashboard' exact>대시보드</Route>
        <Route path='/admin/users' exact>사용자</Route>
        <Route path='/admin/posts' exact>게시글</Route>
      </Switch>
    </div>
  );
}

export default Admin;
