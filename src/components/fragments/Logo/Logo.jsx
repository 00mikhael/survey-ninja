import React from 'react'
import { Link } from 'react-router-dom'
import { GiNinjaHead } from 'react-icons/gi'

const Logo = ({ text }) => {
    return (
        <Link to={`/`} className={`flex items-center space-x-1 text-rose-600`}>
            <GiNinjaHead size={20} />
            <span className={`font-bold text-xl`}>{text}</span>
        </Link>
    )
}

export default Logo
