import React from 'react'
import Heading from '../Heading'

const Question = ({ text }) => {
    return (
        <div className={`space-y-2 max-w-2xl`}>
            <Heading title={`Question`} size={3} />
            <p>{text}</p>
        </div>
    )
}

export default Question
