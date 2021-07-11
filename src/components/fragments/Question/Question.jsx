import React from 'react'
import Heading from '../Heading'

const Question = ({ text, number }) => {
    return (
        <div className={`max-w-2xl`}>
            <div className={`flex items-baseline space-x-1`}>
                <Heading title={`Question`} size={3} />
                <div
                    className={`bg-rose-500 text-white w-6 h-6 rounded-lg font-bold text-lg flex justify-center items-center`}
                >
                    {number}
                </div>
            </div>
            <p>{text}</p>
        </div>
    )
}

export default Question
