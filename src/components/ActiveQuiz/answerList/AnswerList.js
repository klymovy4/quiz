import React from "react";
import classes from "./answerList.module.css";
import AnswerItem from "./AnswerItem/AnswerItem";

const AnswerList = (props) => {

    return (
        <ul className={classes.answerList}>
            {props.answers.map((answer, index) => {
               
                return (
                    <AnswerItem
                        key={index}
                        answer={answer}
                        onAnswerClick={props.onAnswerClick}
                        state={props.state ? props.state[answer.id] : null}
                    />
                )
            })}
        </ul>
    )


}

export default AnswerList;