import React from 'react'
import { useHistory, useParams } from 'react-router-dom'
import FadeIn from 'react-fade-in/lib/FadeIn'

import { useSelector } from 'react-redux'

import Question from '../../fragments/Question'
import OptionsList from '../../fragments/OptionsList'
import Button from '../../fragments/Button'

import { quizData, icons } from '../../../appData'

const Quiz = () => {
    const quizzes = useSelector(state => state.quizzes)
    const { idx } = useParams()
    const history = useHistory()
    const [currentQuestion, setCurrentQuestion] = React.useState({
        index: null,
        data: null
    })

    React.useEffect(() => {
        if (!idx && quizzes) {
            setCurrentQuestion({
                index: 0,
                data: quizzes[0]
            })
        }
        if (idx && quizzes[idx]) {
            setCurrentQuestion({
                index: idx,
                data: quizzes[idx]
            })
        } // eslint-disable-next-line
    }, [idx])

    const handleButtonClick = () => {
        if (Number(currentQuestion.index) === quizzes.length - 1) {
            console.log('here')
            history.push(`/quiz/result/ninja`)
        } else {
            let newIndex = Number(currentQuestion.index) + 1
            history.push(`/quiz/${newIndex}`)
        }
    }

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
                    onOptionSelected={() => {}}
                />
            )}

            <Button
                text={
                    Number(currentQuestion.index) !== quizzes.length - 1
                        ? quizData.main.nextButtonText
                        : quizData.main.submitButtonText
                }
                icon={<icons.RightArrow />}
                placement='right'
                className={`mt-12`}
                onClick={handleButtonClick}
            />
        </FadeIn>
    )
}

export default Quiz
