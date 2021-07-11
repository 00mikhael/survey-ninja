import axios from 'axios'

export const retrieveQuizList = async () => {
    return axios.get(
        'https://opentdb.com/api.php?amount=10&category=28&type=multiple'
    )
}

const QuizService = {
    retrieveQuizList
}

export default QuizService
