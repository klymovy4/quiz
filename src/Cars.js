
import React, { useState } from 'react';
import classes from "./App.module.css"

const data = [
    { name: "ford" }, { name: "Mers" }, { name: "Audi" }
]

function Cars() {
    const [cars, setCars] = useState(data)
    return (
        <div className={classes.rout}>
            <ul className={classes.ul}>

                {cars.map((el, index) => {
                    return (
                        <div>

                            <li key={index}>{el.name}</li>
                        </div>
                    )
                })}
            </ul>
        </div>
    )
}

export default Cars
