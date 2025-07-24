import React from 'react';

function Dashboard({ user }) {
  return (
    <div>
      <h2>Welcome, {user.email}</h2>
      <p>This is a fake dashboard.</p>
    </div>
  );
}

export default Dashboard;
