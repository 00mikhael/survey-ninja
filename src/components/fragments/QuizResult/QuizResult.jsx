import React from 'react'
import { useHistory } from 'react-router-dom'
import Confetti from 'react-confetti'

import { useSelector } from 'react-redux'

import Ranking from '../Ranking'
import Button from '../Button'
import Heading from '../Heading'

import { quizData as data } from '../../../appData'

const QuizResult = () => {
    const { currentResponse } = useSelector(state => state.responses)
    const history = useHistory()
    return (
        <div className={`relative mx-auto`}>
            <Confetti className={`w-full`} />
            {currentResponse && (
                <div
                    className={`max-w-lg mx-auto flex flex-col items-center justify-center space-y-6 pt-14`}
                >
                    <Heading
                        className={`capitalize flex flex-wrap px-6 text-center`}
                        title={`Congratulations, ${currentResponse.designation}`}
                        size={3}
                    />
                    <Ranking score={currentResponse.score} size={60} />
                    <Button
                        text={data.result.buttonText}
                        onClick={() => history.push('/')}
                    />
                </div>
            )}
        </div>
    )
}

export default QuizResult
