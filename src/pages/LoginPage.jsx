import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function LoginPage() {
  const [userId, setUserId] = useState('');
  const history = useHistory();

  const handleLogin = () => {
    localStorage.setItem('userId', userId);
    history.push('/dashboard');
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Enter User ID"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default LoginPage;
