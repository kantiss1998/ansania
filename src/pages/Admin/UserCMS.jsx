import React, { useState } from 'react';

const UserCMS = () => {
  const [users, setUsers] = useState([]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">User Management</h1>

      <table className="w-full border-collapse border border-gray-300">
        <thead className="bg-gray-200">
          <tr>
            <th className="border border-gray-300 px-2 py-1">ID</th>
            <th className="border border-gray-300 px-2 py-1">Username</th>
            <th className="border border-gray-300 px-2 py-1">Email</th>
            <th className="border border-gray-300 px-2 py-1">Role</th>
            <th className="border border-gray-300 px-2 py-1">Last Login</th>
            <th className="border border-gray-300 px-2 py-1">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td className="border border-gray-300 px-2 py-1 text-center">{user.id}</td>
              <td className="border border-gray-300 px-2 py-1">{user.username}</td>
              <td className="border border-gray-300 px-2 py-1">{user.email}</td>
              <td className="border border-gray-300 px-2 py-1 text-center">{user.role}</td>
              <td className="border border-gray-300 px-2 py-1 text-center">{user.last_login}</td>
              <td className="border border-gray-300 px-2 py-1 text-center">
                <a 
                  href={`/admin/user/${user.id}`} 
                  className="bg-blue-500 text-white px-2 py-1 rounded text-xs"
                >
                  View Profile
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserCMS;
