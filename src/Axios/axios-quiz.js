import axios from "axios"

export default axios.create({
    baseURL: "https://quiz-583d4.firebaseio.com/"
})