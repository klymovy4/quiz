
import React, { useState } from 'react';
import classes from "./App.module.css"


const data = [
    "mmm", "metLife", "anothe inshure"
]

const About = () => {
    const [sure, useSure] = useState(data)
    return (
        <div className={classes.rout}>
            <ul className={classes.ul}>
                {sure.map((el, index) => {
                    return (
                        <li
                            key={index}
                        >
                            {el}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default About