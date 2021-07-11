import { RETRIEVE_QUIZ_LIST } from './type'

import QuizService from '../services/quiz'

export const retrieveQuizList = () => async dispatch => {
    try {
        const res = await QuizService.retrieveQuizList()
        dispatch({
            type: RETRIEVE_QUIZ_LIST,
            payload: res.data.results
        })
    } catch (err) {
        console.log(err)
    }
}
