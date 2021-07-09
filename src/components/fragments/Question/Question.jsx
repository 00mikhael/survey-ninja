import React from 'react'
import Heading from '../Heading'

const Question = ({ text, number }) => {
    return (
        <div className={`max-w-2xl`}>
            <div className={`flex items-start space-x-2`}>
                <Heading title={`Question`} size={3} />
                <div
                    className={`bg-rose-500 text-white w-8 h-8 rounded-lg font-bold text-2xl flex justify-center items-center`}
                >
                    {number}
                </div>
            </div>
            <p>{text}</p>
        </div>
    )
}

export default Question
