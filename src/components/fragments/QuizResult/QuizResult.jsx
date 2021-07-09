import React from 'react'
import Confetti from 'react-confetti'

import Ranking from '../Ranking'
import Button from '../Button'
import Heading from '../Heading'

import { quizData as data } from '../../../appData'

const QuizResult = ({ score, designation }) => {
    return (
        <div className={`relative mx-auto`}>
            <Confetti className={`w-full`} />
            <div
                className={`max-w-lg mx-auto flex flex-col items-center justify-center space-y-6 pt-14`}
            >
                <Heading title={`Congratulations, ${designation}`} size={3} />
                <Ranking score={score} size={60} />
                <Button text={data.result.buttonText} />
            </div>
        </div>
    )
}

export default QuizResult
