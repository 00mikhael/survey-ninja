import React from 'react'
import FadeIn from 'react-fade-in/lib/FadeIn'

import { responsesData as resData } from '../../../appData'
import Heading from '../../fragments/Heading'
import InputBox from '../../fragments/InputBox'

const Responses = () => {
    return (
        <React.Fragment>
            <FadeIn className={`mt-16 mb-8 mx-6`}>
                <Heading
                    title={resData.main.title}
                    subtitle={resData.main.subtitle}
                    highlight={true}
                />
                <InputBox
                    buttonText={resData.main.buttonText}
                    buttonPath={`/responses/list`}
                    placeHolder={resData.main.inputPlaceholder}
                />
            </FadeIn>
        </React.Fragment>
    )
}

export default Responses
