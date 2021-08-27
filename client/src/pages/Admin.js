import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import axios from 'axios';
import AdminMenu from '../components/AdminMenu';
import Dashboard from './Admin/Dashboard';
import Users from './Admin/Users';

function Admin() {
  const [adminMenu, setAdminMenu] = useState([]);

  async function getAdminMenu () {
    const result = await axios.get('http://localhost:4000/admin/admin_menu');
    setAdminMenu(result.data);
  }

  useEffect(() => {
    getAdminMenu();
  }, []);

  return (
    <div>
      <h1>Admin</h1>
      <AdminMenu menus={adminMenu} />
      <Switch>
        <Route path="/admin/dashboard">
          <Dashboard />
        </Route>
        <Route path="/admin/users">
          <Users />
        </Route>
      </Switch>
    </div>
  );
}

export default Admin;
