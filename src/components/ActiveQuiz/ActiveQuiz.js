import React from "react";
import classes from "./activeQuiz.module.css";
import AnswerList from "./answerList/AnswerList";

const ActiveQuiz = props => {
    return (
        <div className={classes.activeQuiz}>
            <p className={classes.question}>
                <span>
                    <strong>{props.answerNumber}.</strong>&nbsp;
                    {props.question}
                </span>
                <small>{props.answerNumber} из {props.quizLength}</small>
            </p>
            <AnswerList
                answers={props.answers}
                onAnswerClick={props.onAnswerClick}
                state={props.state}
            />
        </div>
    )
}

export default ActiveQuiz;