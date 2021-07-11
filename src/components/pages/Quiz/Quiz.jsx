import React from 'react'
import { useHistory, useParams } from 'react-router-dom'
import FadeIn from 'react-fade-in/lib/FadeIn'

import { useSelector, useDispatch } from 'react-redux'
import { saveResponse } from '../../../actions/response'

import Question from '../../fragments/Question'
import OptionsList from '../../fragments/OptionsList'
import Button from '../../fragments/Button'

import { quizData, icons } from '../../../appData'

const Quiz = () => {
    const quizList = useSelector(state => state.quizList)
    const dispatch = useDispatch()
    const { idx } = useParams()
    const history = useHistory()

    const [currentQuestion, setCurrentQuestion] = React.useState({
        index: null,
        data: null
    })
    const [selectedOption, setSelectedOption] = React.useState(null)
    const [numOfCorrectResp, setNumOfCorrectResp] = React.useState(0)

    React.useEffect(() => {
        if (quizList) {
            console.table(quizList)
        }
    }, [quizList])

    const calcScore = (numOfCorrectResp, surveyLength) => {
        return (100 * numOfCorrectResp) / surveyLength
    }

    const updateSurveyResponses = response => {
        let respObj = JSON.parse(localStorage.getItem('responseObj'))
        if (respObj) {
            respObj.surveyResponses.push(response)
            respObj.respCount++
            if (quizList[currentQuestion.index + 1]) {
                respObj.nextIndex = currentQuestion.index + 1
            } else {
                respObj.nextIndex = null
            }
        }
        localStorage.setItem('responseObj', JSON.stringify(respObj))
    }

    const updateScore = score => {
        let respObj = JSON.parse(localStorage.getItem('responseObj'))
        if (respObj) {
            respObj.score = score
        }
        localStorage.setItem('responseObj', JSON.stringify(respObj))
    }

    const handleButtonClick = () => {
        if (Number(currentQuestion.index) === quizList.length - 1) {
            if (!selectedOption) {
                return
            }
            if (selectedOption === currentQuestion.data.correct_answer) {
                setNumOfCorrectResp(num => num + 1)
            }

            let resp = {
                question: currentQuestion.data.question,
                response: selectedOption,
                correctAnswer: currentQuestion.data.correct_answer
            }
            updateSurveyResponses(resp)
            let respObj = JSON.parse(localStorage.getItem('responseObj'))
            dispatch(saveResponse(respObj))
            // localStorage.removeItem('responseObj')
            setTimeout(() => {
                history.push(`/quiz/result/ninja`)
            }, 1000)
        } else {
            if (!selectedOption) {
                return
            }
            if (selectedOption === currentQuestion.data.correct_answer) {
                setNumOfCorrectResp(num => num + 1)
            }
            let resp = {
                question: currentQuestion.data.question,
                response: selectedOption,
                correctAnswer: currentQuestion.data.correct_answer
            }
            updateSurveyResponses(resp)
            let newIndex = Number(currentQuestion.index) + 1
            history.push(`/quiz/${newIndex}`)
        }
    }

    const handleOptionSelected = option => {
        setSelectedOption(option)
    }

    React.useEffect(() => {
        if (quizList) {
            let score = calcScore(numOfCorrectResp, quizList.length)
            updateScore(score)
        }
    }, [numOfCorrectResp, quizList])

    React.useEffect(() => {
        if (!idx && quizList) {
            let respObj = JSON.parse(localStorage.getItem('responseObj'))
            if (respObj) {
                respObj.score = 0
                respObj.surveyResponses = []
                respObj.nextIndex = 0
                respObj.respCount = 0
                localStorage.setItem('responseObj', JSON.stringify(respObj))
            }
            setCurrentQuestion({
                index: 0,
                data: quizList[0]
            })
        }
        if (idx && quizList && quizList[idx]) {
            setCurrentQuestion({
                index: idx,
                data: quizList[idx]
            })
        } // eslint-disable-next-line
    }, [idx, quizList])

    return (
        <FadeIn
            className={`max-w-lg mt-16 mb-8 mx-6 sm:mx-auto space-y-8 transition_all`}
        >
            {currentQuestion.data && (
                <Question
                    text={currentQuestion.data.question}
                    number={Number(currentQuestion.index) + 1}
                />
            )}
            {currentQuestion.data && (
                <OptionsList
                    rightAnswer={currentQuestion.data.correct_answer}
                    wrongAnswers={currentQuestion.data.incorrect_answers}
                    onOptionSelected={handleOptionSelected}
                />
            )}

            {quizList && (
                <Button
                    text={
                        Number(currentQuestion.index) !== quizList.length - 1
                            ? quizData.main.nextButtonText
                            : quizData.main.submitButtonText
                    }
                    icon={<icons.RightArrow />}
                    placement='right'
                    className={`mt-12`}
                    onClick={handleButtonClick}
                />
            )}
        </FadeIn>
    )
}

export default Quiz
