import React, { Component } from 'react'
import classes from "./QuizList.module.css"
import { NavLink } from "react-router-dom"
import axios from "../../Axios/axios-quiz"
import Loader from "../../components/Ui/Loader/Loader"

export default class QuizList extends Component {

    state = {
        quizes: [],
        loading: true
    }

    renderQuizes() {
        return this.state.quizes.map(quiz => {
            return (
                <li
                    key={quiz.id}
                >
                    <NavLink
                        to={"/quiz/" + quiz.id}>
                        {quiz.name}
                    </NavLink>
                </li>
            )
        })
    }

    // componentDidMount() {
    //     axios.get("https://quiz-583d4.firebaseio.com/quiz.json").then(response =>{
    //         console.log(response);

    //     })
    // }

    async componentDidMount() {
        try {
            const response = await axios.get("/quizes.json")
            console.log(response.data);
            const quizes = []

            Object.keys(response.data).forEach((key, index) => {
                quizes.push({
                    id: key,
                    name: `Тест №${index + 1}`
                })
            })

            this.setState({
                quizes, 
                loading: false
            })
        } catch (e) {
            console.log(e);
        }
    }

    render() {
        return (
            <div className={classes.quizList}>
                <div>
                    <h1>Список тестов</h1>

                    {
                        this.state.loading
                            ? <Loader />
                            : <ul>
                                {this.renderQuizes()}
                            </ul>
                    }

                </div>
            </div >
        )
    }
}