import React, { useEffect, useState } from 'react';
  function Example() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setUsers(data);
    }
    fetchUsers();
  }, []);

  return (
    <div>
      <ul>
        {users.map((user) => (
          <li >{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Example;

