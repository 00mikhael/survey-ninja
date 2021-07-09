import { combineReducers } from 'redux'
import quizzes from './quiz.js'
import responses from './response'

export default combineReducers({
    quizzes,
    responses
})
