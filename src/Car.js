import React, { useState } from 'react';
import classes from "./App.module.css";
import { withRouter } from "react-router-dom"




const Car = props => {
    return (
        <div className={classes.car}
            onClick={() => props.history.push("/cars/" + props.name.toLowerCase())}
        >
            <p>{props.name}</p>
            <p>{props.year}</p>
        </div>
    )
}

export default withRouter(Car);