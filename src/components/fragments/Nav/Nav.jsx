import React from 'react'
import { Link } from 'react-router-dom'

const Nav = ({ navItems }) => {
    return (
        <div className={`flex items-center space-x-4`}>
            {navItems?.map((item, idx) => (
                <Link
                    key={idx}
                    to={item.path}
                    className={`text-lg hover:text-rose-500`}
                >
                    {item.label.toLowerCase()}
                </Link>
            ))}
        </div>
    )
}

export default Nav
