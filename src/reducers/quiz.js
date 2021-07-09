import { RETRIEVE_QUIZZES } from '../actions/type'

const initialState = null

const quizReducer = (quizzes = initialState, action) => {
    const { type, payload } = action

    switch (type) {
        case RETRIEVE_QUIZZES:
            return payload
        default:
            return quizzes
    }
}

export default quizReducer
