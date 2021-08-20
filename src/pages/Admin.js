import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Users from './Admin/Users';

function Admin() {
  return (
    <>
      <h1>Admin</h1>
      <Switch>
        <Route exact={true} path="/admin">
          <h2>DashBoard</h2>
        </Route>
        <Route path="/admin/users">
          <Users />
        </Route>
      </Switch>
    </>
  );
}

export default Admin;
