import React from 'react'
import { useHistory } from 'react-router-dom'
import { ImArrowLeft2 } from 'react-icons/im'
import FadeIn from 'react-fade-in/lib/FadeIn'

import Button from '../Button'
import Heading from '../Heading'
import Ranking from '../Ranking'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { responsesData as data } from '../../../appData'

import { retrieveResponseItem } from '../../../actions/response'

const ResponseDetail = () => {
    const responses = useSelector(state => state.responses)
    const dispatch = useDispatch()
    const history = useHistory()
    const { designation } = useParams()

    React.useEffect(() => {
        if (designation) {
            dispatch(retrieveResponseItem(designation))
        } // eslint-disable-next-line
    }, [designation, responses.responseList])

    return (
        <div className={`p-4 max-w-2xl mx-auto mt-16`}>
            <Button
                text={data.responseDetail.buttonText}
                type='secondary'
                icon={<ImArrowLeft2 />}
                placement='left'
                size={2}
                onClick={() => history.goBack()}
                className={`mt-6`}
            />

            {responses.currentResponse &&
                designation === responses.currentResponse.designation && (
                    <React.Fragment>
                        <div
                            className={`flex items-center justify-between my-6`}
                        >
                            <Heading
                                title={responses.currentResponse.designation}
                                size={2}
                            />
                            <Ranking
                                score={responses.currentResponse.score}
                                size={30}
                            />
                        </div>
                        <FadeIn
                            className={`list flex flex-col justify-center  w-full space-y-12 mt-4 max-w-2xl mx-auto`}
                        >
                            {responses.currentResponse.surveyResponses.map(
                                response => (
                                    <NinjaResponseItem
                                        key={response._id}
                                        question={response.question}
                                        response={response.response}
                                        correctAnswer={response.correctAnswer}
                                    />
                                )
                            )}
                        </FadeIn>
                    </React.Fragment>
                )}
        </div>
    )
}

const NinjaResponseItem = ({ question, response, correctAnswer }) => {
    return (
        <FadeIn
            className={`flex-grow w-full h-auto shadow-lg hover:shadow-md rounded-lg border border-gray-100 overflow-hidden my-2 sm:my-0 mx-auto p-6 bg-white space-y-8`}
        >
            <div>
                <Heading
                    title={data.responseDetail.ninjaResponses.questionTitle}
                    size={3}
                />
                <p>{question}</p>
            </div>

            <div>
                <Heading
                    title={data.responseDetail.ninjaResponses.responseTitle}
                    size={3}
                />
                <p>{response}</p>
            </div>

            <div>
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
