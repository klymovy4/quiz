import React, { Component } from 'react'
import classes from './App.module.css'
import { Route, NavLink, Switch, Redirect } from 'react-router-dom'
import About from './About'
import Cars from './Cars'
import "./css.css"
import CarDetail from "./CarDetail";

class App extends Component {
    state = {
        isLoggedIn: false
    }
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
                <div style={{ textAlign: "center" }}>
                    <h3>Is logged in {this.state.isLoggedIn ? "true" : "false"}</h3>
                    <button
                        onClick={() => {
                            this.setState({
                                isLoggedIn: !this.state.isLoggedIn
                            })
                        }}>

                        Login
        </button>
                </div>
                <hr />

                <Switch>
                    <Route path="/" exact render={() => <h1 className={classes.h1} >Home Page</h1>} />
                    {this.state.isLoggedIn ? <Route path="/about" component={About} /> : null}
                    <Route path="/cars/:name" component={CarDetail} />
                    <Route path="/cars" component={Cars} />
                    <Redirect to={"/"} />
                    {/* <Route render={() => <h1 style={{ color: "red", fontWeight: "bold", textAlign: "center" }}> 404 Error Page not Found</h1>} /> */}
                </Switch>
            </div>
        );
    }
}

export default App