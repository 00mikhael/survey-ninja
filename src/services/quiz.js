import axios from 'axios'

export const retrieveAll = async () => {
    return axios.get(
        'https://opentdb.com/api.php?amount=10&category=28&type=multiple'
    )
}

const QuizService = {
    retrieveAll
}

export default QuizService
