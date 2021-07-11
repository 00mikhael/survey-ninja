import React from 'react'

import Button from '../Button'

const InputBox = ({
    buttonText,
    placeHolder,
    defaultValue,
    className,
    onButtonClick
}) => {
    const [inputValue, setInputValue] = React.useState()
    const [changed, setChanged] = React.useState(false)

    const handleInputChange = e => {
        setChanged(true)
        setInputValue(e.target.value)
    }

    const handleButtonClick = () => {
        if (changed) {
            onButtonClick(inputValue)
        } else {
            onButtonClick(defaultValue)
        }
    }

    return (
        <div
            className={`${className} bg-white shadow-lg border border-gray-100 pr-4 rounded-full max-w-lg w-full flex items-center`}
        >
            <input
                className={`rounded-full focus:outline-none mr-2  ml-8 my-4 p-2 w-full flex-shrink-1 flex-1`}
                value={changed ? inputValue : defaultValue}
                onChange={handleInputChange}
                type='text'
                placeholder={placeHolder}
            />
            <Button
                className={`flex-shrink-0`}
                text={buttonText}
                reSize={true}
                onClick={handleButtonClick}
            />
        </div>
    )
}

export default InputBox
