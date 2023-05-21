import React from 'react';
import '..//App.css';
import Footer from '..//components/Footer';


function Login() {
  return (
<div className="mt-3" style={{backgroundColor: "lightPink"}}>
<div className="login-container">
      <h2>Login</h2>
      <form>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" />
        </div>
        <button type="submit">Login</button>
      </form>
    
      </div>
      <br />

      <Footer />
    </div>

  
  );
}

export default Login;
