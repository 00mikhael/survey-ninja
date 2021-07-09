import React from 'react'
import Heading from '../Heading'

const Question = ({ text }) => {
    return (
        <div className={`max-w-2xl`}>
            <Heading title={`Question`} size={3} />
            <p>{text}</p>
        </div>
    )
}

export default Question
