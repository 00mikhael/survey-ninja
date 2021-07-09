import React from 'react'
import FadeIn from 'react-fade-in/lib/FadeIn'
import { RadioGroup } from '@headlessui/react'
import { shuffle } from 'lodash'

const OptionsList = ({
    className,
    rightAnswer,
    wrongAnswers,
    onOptionSelected
}) => {
    const [selected, setSelected] = React.useState()
    const [options, setOptions] = React.useState()

    React.useEffect(() => {
        if (rightAnswer && wrongAnswers) {
            let options = wrongAnswers.concat(rightAnswer)
            setOptions(shuffle(options))
        }
    }, [rightAnswer, wrongAnswers])

    React.useEffect(() => {
        if (selected) {
            onOptionSelected(selected)
        } // eslint-disable-next-line
    }, [selected])

    return (
        <FadeIn className={`${className} w-full max-w-lg`}>
            <RadioGroup value={selected} onChange={setSelected}>
                <div className='space-y-2'>
                    {options &&
                        options.map((option, idx) => (
                            <RadioGroup.Option
                                key={idx}
                                value={option}
                                className={({ checked }) =>
                                    `
                  ${
                      checked
                          ? 'bg-rose-600 bg-opacity-75 text-white'
                          : 'bg-white'
                  }
                    relative rounded-lg shadow-md px-6 py-4 cursor-pointer flex focus:outline-none border border-gray-100`
                                }
                            >
                                {({ checked }) => (
                                    <>
                                        <div className='flex items-center justify-between w-full'>
                                            <div className='flex items-center'>
                                                <div className='text-base'>
                                                    <RadioGroup.Label
                                                        as='p'
                                                        className={`font-medium  ${
                                                            checked
                                                                ? 'text-white'
                                                                : 'text-gray-800'
                                                        }`}
                                                    >
                                                        {option}
                                                    </RadioGroup.Label>
                                                </div>
                                            </div>
                                            {checked && (
                                                <div className='flex-shrink-0 text-white'>
                                                    <CheckIcon className='w-6 h-6' />
                                                </div>
                                            )}
                                        </div>
                                    </>
                                )}
                            </RadioGroup.Option>
                        ))}
                </div>
            </RadioGroup>
        </FadeIn>
    )
}

function CheckIcon(props) {
    return (
        <svg viewBox='0 0 24 24' fill='none' {...props}>
            <circle cx={12} cy={12} r={12} fill='#fff' opacity='0.2' />
            <path
                d='M7 13l3 3 7-7'
                stroke='#fff'
                strokeWidth={1.5}
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </svg>
    )
}

export default OptionsList
