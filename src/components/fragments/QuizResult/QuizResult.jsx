import React from 'react'
import { useHistory, useParams } from 'react-router-dom'
import Confetti from 'react-confetti'

import Ranking from '../Ranking'
import Button from '../Button'
import Heading from '../Heading'

import { quizData as data } from '../../../appData'

const QuizResult = ({ score }) => {
    const history = useHistory()
    const { designation } = useParams()
    //TODO: fetch result
    return (
        <div className={`relative mx-auto`}>
            <Confetti className={`w-full`} />
            <div
                className={`max-w-lg mx-auto flex flex-col items-center justify-center space-y-6 pt-14`}
            >
                <Heading title={`Congratulations, ${designation}`} size={3} />
                <Ranking score={score || 91} size={60} />
                <Button
                    text={data.result.buttonText}
                    onClick={() => history.push('/')}
                />
            </div>
        </div>
    )
}

export default QuizResult
