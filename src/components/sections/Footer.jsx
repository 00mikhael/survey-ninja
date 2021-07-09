import React from 'react'
import { ImHeart } from 'react-icons/im'

import { appData } from '../../appData'

const Footer = ({ className }) => {
    return (
        <footer className={`${className} flex items-center justify-center p-4`}>
            <small
                className={` bg-white max-w-xs w-full text-sm text-center p-4 rounded-lg`}
            >
                All <ImHeart className={`inline-block text-rose-600`} /> from{' '}
                <a
                    className={`text-rose-600`}
                    href='https://github.com/00mikhael/survey-ninja'
                    target='_blank'
                    rel='noreferrer'
                >
                    {appData.name}
                </a>
            </small>
        </footer>
    )
}

export default Footer
