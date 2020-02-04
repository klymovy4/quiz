import React, { Component } from "react";
import classes from "./Drawer.module.css";
import BackDrop from "../../Ui/BackDrop/BackDrop";
import { NavLink } from "react-router-dom"

const links = [
    { to: "/", label: "List", exact: true },
    { to: "/auth", label: "Авторизация", exact: false },
    { to: "/quiz-creator", label: "Создать текст", exact: false },
]

class Drawer extends Component {
    clickHandler = () => {
        this.props.onClose()
    }
    render() {
        const cls = [
            classes.Drawer,
            !this.props.isOpen ? classes.close : ""
        ]
        // if (!this.props.isOpen) {
        //     cls.push(classes.close)
        // }


        return (
            <React.Fragment>
                <nav className={cls.join(" ")}>
                    <ul>
                        {links.map((link, index) => {
                            return (
                                <li key={index}>
                                    <NavLink
                                        to={link.to}
                                        exact={link.exact}
                                        activeClassName={classes.active}
                                        onClick={this.clickHandler}
                                    >
                                        {link.label}
                                    </NavLink>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
                {this.props.isOpen ? <BackDrop

                    onClick={this.props.onClose}
                /> : null}
            </React.Fragment>



        )
    }
}

export default Drawer