import React from 'react'
import { Route, useHistory } from 'react-router-dom'
import FadeIn from 'react-fade-in/lib/FadeIn'

import { useDispatch } from 'react-redux'
import { retrieveResponseItem } from '../../../actions/response'

import { homeData, icons } from '../../../appData'
import Heading from '../../fragments/Heading'
import InputBox from '../../fragments/InputBox'
import Message from '../../fragments/Message'
import Button from '../../fragments/Button'

const Home = () => {
    const dispatch = useDispatch()
    const [sessionRespObj, setSessionRespObj] = React.useState()
    const history = useHistory()

    React.useEffect(() => {
        let respObj = JSON.parse(localStorage.getItem('responseObj'))
        if (respObj) {
            setSessionRespObj(respObj)
        }
    }, [])

    const handleHomeButtonClick = inputValue => {
        let designation = inputValue.toLowerCase()
        if (designation) {
            dispatch(retrieveResponseItem(designation))
                .then(({ data }) => {
                    history.push(`/quiz/result/${data.designation}`)
                })
                .catch(err => {
                    let respObj = {
                        designation,
                        score: 0,
                        surveyResponses: [],
                        respCount: 0
                    }
                    setSessionRespObj(respObj)
                    localStorage.setItem('responseObj', JSON.stringify(respObj))
                    if (err?.response?.status === 404) {
                        history.push('/instructions')
                    }
                })
        }
    }

    const handleInstructionsButtonClick = () => {
        history.push('/quiz')
    }

    return (
        <React.Fragment>
            <Route exact path={['/', '/home']}>
                <FadeIn className={`mt-16 mb-8 mx-6`}>
                    <Heading title={homeData.home.title.substr(0, 7)} />
                    <Heading
                        title={homeData.home.title.substr(7)}
                        subtitle={homeData.home.subtitle}
                        className={`text-rose-600`}
                    />
                    <InputBox
                        buttonText={homeData.home.buttonText}
                        buttonPath={`/instructions`}
                        placeHolder={homeData.home.inputPlaceholder}
                        defaultValue={`RandomNinja-${Date.now()
                            .toString()
                            .slice(8, 13)}`}
                        onButtonClick={handleHomeButtonClick}
                        className={`mt-4`}
                    />
                </FadeIn>
            </Route>
            <Route exact path={['/instructions']}>
                <FadeIn className={`mt-16 mb-8 mx-6`}>
                    {sessionRespObj && (
                        <Message name={sessionRespObj.designation} />
                    )}
                    <Heading
                        title={homeData.instructions.title}
                        subtitle={homeData.instructions.subtitle}
                    />
                    <p className={`my-6 max-w-xl`}>
                        {homeData.instructions.instruction}
                    </p>
                    <Button
                        text={homeData.instructions.buttonText}
                        icon={<icons.RightArrow />}
                        placement='right'
                        onClick={handleInstructionsButtonClick}
                    />
                </FadeIn>
            </Route>
        </React.Fragment>
    )
}

export default Home
