import { RETRIEVE_QUIZ_LIST } from '../actions/type'

const initialState = null

const quizReducer = (quizList = initialState, action) => {
    const { type, payload } = action

    switch (type) {
        case RETRIEVE_QUIZ_LIST:
            return payload
        default:
            return quizList
    }
}

export default quizReducer
