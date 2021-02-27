import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';
import Login from '../Login/Login';
import Preferences from '../Preferences/Preferences';

export default function Login() {
    const [token, setToken] = useState();
    if(!token) {
        return <Login setToken={setToken} />
      }
      
    return(
      <div className="login-wrapper">
        <h1>Please Log In</h1>
        <form>
          <label>
            <p>Username</p>
            <input type="text" />
          </label>
          <label>
            <p>Password</p>
            <input type="password" />
          </label>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    )
  }

export default App;