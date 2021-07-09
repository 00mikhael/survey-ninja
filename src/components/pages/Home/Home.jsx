import React from 'react'
import { Route, useHistory } from 'react-router-dom'
import FadeIn from 'react-fade-in/lib/FadeIn'

import { useDispatch } from 'react-redux'
import { retrieveQuizzes } from '../../../actions/quiz'

import { homeData, icons } from '../../../appData'
import Heading from '../../fragments/Heading'
import InputBox from '../../fragments/InputBox'
import Message from '../../fragments/Message'
import Button from '../../fragments/Button'

const Home = () => {
    const history = useHistory()
    const dispatch = useDispatch()

    React.useEffect(() => {
        dispatch(retrieveQuizzes())
        // eslint-disable-next-line
    }, [])

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
                        className={`mt-4`}
                    />
                </FadeIn>
            </Route>
            <Route exact path={['/instructions']}>
                <FadeIn className={`mt-16 mb-8 mx-6`}>
                    <Message name={`Michael`} />
                    <Heading
                        title={homeData.instructions.title}
                        subtitle={homeData.instructions.subtitle + ' Vehicles'}
                    />
                    <p className={`my-6 max-w-xl`}>
                        Professionally engineer distributed experiences for
                        frictionless action items. Conveniently customize
                        front-end catalysts for change after intuitive web
                        services. Continually integrate interdependent
                        outsourcing through technically sound users.
                    </p>
                    <Button
                        text={homeData.instructions.buttonText}
                        icon={<icons.RightArrow />}
                        placement='right'
                        onClick={() => history.push('/quiz')}
                    />
                </FadeIn>
            </Route>
        </React.Fragment>
    )
}

export default Home
