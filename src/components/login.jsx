import React, { useState } from 'react';

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [shake, setShake] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username && !password) {
      setError('Please enter your username and password');
      triggerShake();
      return;
    }
    if (!username) {
      setError('Please enter your username');
      triggerShake();
      return;
    }
    if (!password) {
      setError('Please enter your password');
      triggerShake();
      return;
    }
    if (username !== 'sohan') {
      setError("We don't recognize that username");
      triggerShake();
      return;
    }
    if (password !== '12345') {
      setError('Wrong password. Try again');
      triggerShake();
      return;
    }

    setError('');
    onLogin(username);
  };

  const triggerShake = () => {
    setShake(true);
    setTimeout(() => setShake(false), 500);
  };

  return (
    <div className="login-page">
      <div className={`login-card ${shake ? 'shake' : ''}`}>
        <h1 className="login-title">Sign in</h1>
        <p className="login-subtitle">Stay updated on your professional world</p>

        {error && (
          <div className="error-banner">
            <span className="error-icon">⚠</span>
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => { setUsername(e.target.value); setError(''); }}
              className={error && !username ? 'input-error' : ''}
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => { setPassword(e.target.value); setError(''); }}
              className={error && !password ? 'input-error' : ''}
            />
          </div>
          <button type="submit" className="login-btn">Sign in</button>
        </form>

        <p className="demo-credentials">Demo: <strong>sohan</strong> / <strong>12345</strong></p>
      </div>
    </div>
  );
}

export default Login;