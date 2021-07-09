import { RETRIEVE_QUIZZES } from './type'

import QuizService from '../services/quiz'

export const retrieveQuizzes = () => async dispatch => {
    try {
        const res = await QuizService.retrieveAll()
        dispatch({
            type: RETRIEVE_QUIZZES,
            payload: res.data.results
        })
    } catch (err) {
        console.log(err)
    }
}
