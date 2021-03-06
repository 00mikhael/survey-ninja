import React from 'react'
import { Link } from 'react-router-dom'

import { icons } from '../../../appData'

const Logo = ({ text }) => {
    return (
        <Link to={`/`} className={`flex items-center space-x-1 text-rose-600`}>
            <icons.Logo size={20} />
            <span className={`font-bold text-xl`}>{text}</span>
        </Link>
    )
}

export default Logo
