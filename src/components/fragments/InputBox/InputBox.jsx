import React from 'react'

import Button from '../Button'

const InputBox = ({ buttonText, placeHolder, value, className }) => {
    const [inputValue, setInputValue] = React.useState()

    const handleInputChange = e => {
        setInputValue(e.target.value)
    }

    React.useEffect(() => {
        setInputValue(value)
    }, [value])

    return (
        <div
            className={`${className} bg-white shadow-lg border border-gray-100 pr-4 my-6 rounded-full max-w-lg w-full flex items-center`}
        >
            <input
                className={`rounded-full focus:outline-none mr-2  ml-8 my-4 p-2 w-full flex-shrink-1 flex-1`}
                value={inputValue}
                onChange={handleInputChange}
                type='text'
                placeholder={placeHolder}
            />
            <Button
                className={`flex-shrink-0`}
                text={buttonText}
                reSize={true}
            />
        </div>
    )
}

export default InputBox