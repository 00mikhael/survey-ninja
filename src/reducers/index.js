import { combineReducers } from 'redux'
import quizList from './quiz.js'
import responses from './response'

export default combineReducers({
    quizList,
    responses
})
