import React, { Component } from "react";
import classes from "./quiz.module.css";
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";
import FinishQuiz from "../../components/FinishQuiz/FinishQuiz"



class Quiz extends Component {
    state = {
        results: {}, // {[id]: "success" "error"}
        isFinished: false,
        activeQuestion: 0,
        answerState: null, // {[id]: "success" "error"}
        quiz: [
            {
                question: "Whats color sky",
                rightAnswerId: 3,
                id: 1,
                answers: [
                    { text: "Red", id: 1 },
                    { text: "Green", id: 2 },
                    { text: "blue", id: 3 },
                    { text: "Transparent", id: 4 }
                ]
            },
            {
                question: "Capital of Italy",
                rightAnswerId: 2,
                id: 2,
                answers: [
                    { text: "Milan", id: 1 },
                    { text: "Roma", id: 2 },
                    { text: "Buenos Airos", id: 3 },
                    { text: "Moscow", id: 4 }
                ]
            },
            {
                question: "finish the word 'Metal'",
                rightAnswerId: 3,
                id: 3,
                answers: [
                    { text: "lurgiya", id: 1 },
                    { text: "ium", id: 2 },
                    { text: "lica", id: 3 },
                    { text: "ovica", id: 4 }
                ]
            },
            // {
            //     question: "finish the word 'Metal'",
            //     rightAnswerId: 3,
            //     id: 4,
            //     answers: [
            //         { text: "lurgiya", id: 1 },
            //         { text: "ium", id: 2 },
            //         { text: "lica", id: 3 },
            //         { text: "ovica", id: 4 }
            //     ]
            // },
        ]
    }

    onAnswerClickHandler = answerId => {
        if (this.state.answerState) {
            const key = Object.keys(this.state.answerState)[0];
            if (this.state.answerState[key] === "success") {
                return
            }
        }
        const question = this.state.quiz[this.state.activeQuestion];
        const results = this.state.results;
        // console.log("answerId", answerId, question);

        if (question.rightAnswerId === answerId) {
            debugger;
            if (!results[question.id]) {
                results[question.id] = "success"
            }

            this.setState({
                answerState: { [answerId]: "success" },
                results // можно продублировать, но совподает ключ значение
            })

            const timeout = window.setTimeout(() => {
                if (this.isQuizFinished()) {
                    console.log("finished");
                    this.setState({
                        isFinished: true
                    })
                } else {
                    this.setState({
                        activeQuestion: this.state.activeQuestion + 1,
                        answerState: null
                    });
                }

                window.clearTimeout(timeout);
            }, 1000)


        } else {
            results[question.id] = "error"
            this.setState({
                answerState: { [answerId]: "error" },
                results: results
            })
        }
        // 051 Отображение состояния ответа

    }
    isQuizFinished() {
        return this.state.activeQuestion + 1 === this.state.quiz.length;
    }

    retryHandler = () => {
        this.setState({
            activeQuestion: 0,
            answerState: null,
            isFinished: false,
            results: {}
        })
    }

    render() {
        return (
            <div className={classes.quiz}>
                <div className={classes.wrapper}>
                    <h1>Quiz</h1>
                    {
                        this.state.isFinished
                            ? <FinishQuiz
                                results={this.state.results}
                                quiz={this.state.quiz}
                                onRetry={this.retryHandler}
                            />
                            : <ActiveQuiz
                                answers={this.state.quiz[this.state.activeQuestion].answers}
                                question={this.state.quiz[this.state.activeQuestion].question}
                                onAnswerClick={this.onAnswerClickHandler}
                                quizLength={this.state.quiz.length}
                                answerNumber={this.state.activeQuestion + 1}
                                state={this.state.answerState}
                            />
                    }

                </div>

            </div>
        )
    }
}

export default Quiz;