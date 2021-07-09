import { RETRIEVE_QUIZZES } from '../actions/type'

const initialState = null

const quizReducer = (responses = initialState, action) => {
    const { type, payload } = action

    switch (type) {
        case RETRIEVE_QUIZZES:
            return payload
        default:
            return responses
    }
}

export default quizReducer
