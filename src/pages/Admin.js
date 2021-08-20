import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Users from './Admin/Users';

function Admin() {
  return (
    <div>
      <h1>Admin</h1>
      <Switch>
        <Route exact={true} path="/admin">
          <h2>DashBoard</h2>
        </Route>
        <Route path="/admin/users">
          <h2>Users</h2>
          <Users />
        </Route>
      </Switch>
    </div>
  );
}

export default Admin;
