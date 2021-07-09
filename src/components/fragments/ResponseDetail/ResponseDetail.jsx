import React from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { ImArrowLeft2 } from 'react-icons/im'
import FadeIn from 'react-fade-in/lib/FadeIn'

import Button from '../Button'
import Heading from '../Heading'
import Ranking from '../Ranking'

import { responsesData as data } from '../../../appData'

import { mockResponseData as responseList } from '../../../appData'
const ResponseDetail = () => {
    const history = useHistory()
    // const params = useParams()
    return (
        <div className={`p-4`}>
            <Button
                text={data.responseDetail.buttonText}
                type='secondary'
                icon={<ImArrowLeft2 />}
                placement='left'
                size={2}
                onClick={() => history.goBack()}
                className={`mt-6`}
            />
            <div
                className={`flex items-center justify-between my-6 max-w-2xl mx-auto`}
            >
                <Heading title={responseList[0].designation} size={2} />
                <Ranking score={responseList[0].score} size={30} />
            </div>
            <FadeIn
                className={`list flex flex-col justify-center  w-full space-y-12 mt-4 max-w-2xl mx-auto`}
            >
                {responseList[0].ninjaResponses.map(responseItem => (
                    <NinjaResponseItem
                        key={responseItem.id}
                        question={responseItem.question}
                        response={responseItem.response}
                        correctAnswer={responseItem.correctAnswer}
                    />
                ))}
            </FadeIn>
        </div>
    )
}

const NinjaResponseItem = ({ question, response, correctAnswer }) => {
    return (
        <FadeIn
            className={`flex-grow w-full h-auto shadow-lg hover:shadow-md rounded-lg border border-gray-100 overflow-hidden my-2 sm:my-0 mx-auto p-6 bg-white space-y-4`}
        >
            <div className={`space-y-2`}>
                <Heading
                    title={data.responseDetail.ninjaResponses.questionTitle}
                    size={3}
                />
                <p>{question}</p>
            </div>

            <div className={`space-y-2`}>
                <Heading
                    title={data.responseDetail.ninjaResponses.responseTitle}
                    size={3}
                />
                <p>{response}</p>
            </div>

            <div className={`space-y-2`}>
                <Heading
                    title={data.responseDetail.ninjaResponses.answerTitle}
                    size={3}
                />
                <p>{correctAnswer}</p>
            </div>
        </FadeIn>
    )
}

export default ResponseDetail
