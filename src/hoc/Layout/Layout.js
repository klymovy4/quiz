import React, { Component } from "react";
import classes from "./layout.module.css";
import MenuToggle from "../../components/Navigations/MenuToggle/MenuToggle";
import Drawer from "../../components/Navigations/Drawer/Drawer";



class Layout extends Component {
    state = {
        menu: false
    }
    toggleMenuHandler = () => {
        this.setState({
            menu: !this.state.menu
        })
    }
    menuCliseHandler = () => {
        this.setState({
            menu: false
        })
    }
    render() {
        return (
            <div className={classes.layout}>

                <MenuToggle
                    onToggle={this.toggleMenuHandler}
                    isOpen={this.state.menu}
                />
                <main className={classes.main}>
                    {this.props.children}
                </main>
                <Drawer
                    isOpen={this.state.menu}
                    onClose={this.menuCliseHandler}
                />
            </div>
        )
    }
}

export default Layout;