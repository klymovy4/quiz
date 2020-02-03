import React, { Component } from 'react'
import classes from './App.module.css'
import { Route, NavLink } from 'react-router-dom'
import About from './About'
import Cars from './Cars'
import "./css.css"
import CarDetail from "./CarDetail"
import Switch from "react-switch";

class App extends Component {
  render() {

    return (
      <div>
        <nav
        >
          <ul
            className={classes.header}>
            <li>
              <NavLink exact activeClassName={classes.active} to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about" activeStyle={{ color: "blue" }}>About</NavLink>
            </li>
            <li>
              <NavLink

                to={{ pathname: "/cars" }}>Cars</NavLink>
            </li>
          </ul>
        </nav>

        <hr />

        {/*localhost:3000*/}
        <Switch>
          <Route path="/" exact render={() => <h1 className={classes.h1} >Home Page</h1>} />
          <Route path="/about" component={About} />
          <Route path="/cars/:name" component={CarDetail} />
          <Route path="/cars" component={Cars} />
        </Switch>
      </div>
    );
  }
}

export default App