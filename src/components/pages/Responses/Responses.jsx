import React from 'react'
import FadeIn from 'react-fade-in/lib/FadeIn'

import { useHistory } from 'react-router-dom'

import { responsesData as resData } from '../../../appData'
import Heading from '../../fragments/Heading'
import InputBox from '../../fragments/InputBox'

const Responses = () => {
    const history = useHistory()

    const handleButtonClick = inputValue => {
        if (
            inputValue &&
            inputValue.toLowerCase().trim() ===
                resData.main.theSecret.toLowerCase().trim()
        ) {
            history.push('/responses/list')
        } else {
            alert('Try again')
        }
    }
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
                    placeHolder={resData.main.inputPlaceholder}
                    onButtonClick={handleButtonClick}
                />
            </FadeIn>
        </React.Fragment>
    )
}

export default Responses
