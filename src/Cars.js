
import React, { useState } from 'react';
import classes from "./App.module.css";
import { withRouter } from "react-router-dom"
import Car from "./Car"

const data = [
    { name: "ford", year: 1987 }, { name: "Mers", year: 1987 }, { name: "Audi", year: 1987 }
]

function Cars(props) {
    const [cars, setCars] = useState(data)
    // console.log(props);
    const goTohomePage = () => {
        props.history.push({
            pathname: "/"
        })

    }

    return (
        <div className={classes.rout}>
            <ul className={classes.ul}>
                <button onClick={goTohomePage}>Home Page</button>

                {cars.map((el, index) => {
                    // console.log(props)
                    return (
                        <Car
                            key={index}
                            name={el.name}
                            year={el.year}
                        >
                        </Car>
                    )
                })}
            </ul>
        </div>
    )
}

export default withRouter(Cars)
