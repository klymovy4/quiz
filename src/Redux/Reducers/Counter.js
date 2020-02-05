import React from "react"
import { connect } from "react-redux"
import { add2 } from "../actions/Actions"

class Counter extends React.Component {
    render() {
        return (
            <div style={{ margin: "30px auto", padding: 20, border: "1px solid #ccc" }}>
                <h1>Counter {this.props.counter}</h1>
                <hr />
                <div>
                    <button onClick={() => this.props.onChange(1)}>Add</button>
                    <button onClick={() => this.props.onChange(-1)}>Sub</button>

                </div>
            </div>
        )
    }
}
function mapStateToProps(state) {
    // console.log(state);
    return {
        counter: state.counter2.counter2
    }
}
function mapDispatchToProps(dispatch) {
    return {
        onChange: number => dispatch(add2(number))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter)