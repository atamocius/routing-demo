import classes from './app.module.css';

console.log(classes);

import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Home from './pages/home';
import Users from './pages/users';
import About from './pages/about';

export default function App() {
  return (
    <Router>
      <nav className={classes.titleBar}>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/users'>Users</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
        </ul>
      </nav>

      <main>
        <Switch>
          <Route path='/users'>
            <Users />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}
