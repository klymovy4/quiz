import React, { Component } from 'react';
import { connect } from "react-redux"
import classes from "./AppRedux.module.css"
import Counter from "./Redux/Reducers/Counter"
import { add, sub, addNumber, asyncAdd } from "./Redux/actions/Actions"

class AppRedux extends Component {

    render() {
        // console.log("app", this.props);
        return (
            <div className={classes.app}>
                <h1>Счетчик <strong>{this.props.counter}</strong></h1>
                <hr />
                <div className={classes.buttons}>
                    <button onClick={() => this.props.onAddNumber(-17)}>-17</button>
                    <button onClick={() => this.props.onAddNumber(20)}>+20</button>
                    <button onClick={this.props.onSub}>Decrement</button>
                    <button onClick={this.props.onAdd}>Increment</button>
                </div>
                <div className={classes.buttons} style={{ marginTop: 20 }}>
                    <button onClick={() => this.props.onAsyncAdd(100)}>Добавить 100</button>
                </div>
                <Counter />
            </div>
        )
    }
}

function mapStateToProps(state) {
    // console.log("state", state);

    return {
        counter: state.counter1.counter
        // counter: state.twenty
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onAdd: () => dispatch(add()),
        onSub: () => dispatch(sub()),
        onAddNumber: number => dispatch(addNumber(number)),
        onAsyncAdd: number => dispatch(asyncAdd(number))

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppRedux)