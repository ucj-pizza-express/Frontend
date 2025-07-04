import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import axios from 'axios';

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('/api/users')
      .then(res => setUsers(res.data))
      .catch(err => console.error("Error fetching users:", err));
  }, []);

  return (
    <div className="admin-container">
      <Sidebar />
      <div className="admin-content">
        <h2>User List</h2>
        <ul>
          {users.map((user, i) => (
            <li key={i}>{user.name} - {user.email}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
