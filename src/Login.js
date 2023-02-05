import React, { useState } from 'react';
import './Login.css'

const Login = () => {
  const [error, setError] = useState(null);

  const handleGoogleLogin = async () => {
    try {
      const response = await fetch('https://oauth-login.onrender.com/login/google', {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      console.log(data);
    } catch (err) {
      setError(err);
    }
  };

  const handleFacebookLogin = async () => {
    try {
      const response = await fetch('https://oauth-login.onrender.com/login/facebook', {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      console.log(data);
    } catch (err) {
      setError(err);
    }
  };

  const handleGithubLogin = async () => {
    try {
      const response = await fetch('https://oauth-login.onrender.com/login/github', {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      console.log(data);
    } catch (err) {
      setError(err);
    }
  };

  return (
 
    <div>
      {error && <p>{error.message}</p>}
      <button className="google" onClick={handleGoogleLogin}>Login with Google</button>
<button className="facebook" onClick={handleFacebookLogin}>Login with Facebook</button>
<button className="github" onClick={handleGithubLogin}>Login with Github</button>

    </div>
    
  );
};

export default Login;
