import React, { Component } from "react";
import classes from "./Drawer.module.css";
import BackDrop from "../../Ui/BackDrop/BackDrop";

const links = [1, 2, 3]

class Drawer extends Component {
    
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
                                    <a>Link {link}</a>
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