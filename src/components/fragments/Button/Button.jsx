import React from 'react'

import styles from './Button.module.css'

const Button = ({ text, type, reSize, className, icon, placement }) => {
    return (
        <button
            className={`${className} ${styles.button} ${
                type === 'secondary'
                    ? `bg-white text-rose-500`
                    : `bg-rose-500 text-white`
            } transition_all border-2 border-rose-500 hover:bg-rose-500 hover:text-white ${
                reSize
                    ? `px-4 py-2 text-sm sm:px-6 sm:text-lg`
                    : `px-6 py-2 text-lg`
            }  rounded-3xl flex items-center`}
        >
            {icon && placement === 'left' && icon}
            <span className={`px-2`}>{text}</span>
            {icon && placement === 'right' && icon}
        </button>
    )
}

export default Button
