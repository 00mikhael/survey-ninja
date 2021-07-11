import React from 'react'

const Message = ({ name }) => {
    return (
        <div
            className={`mb-6 text-lg text-rose-500 capitalize`}
        >{`Welcome, ${name}`}</div>
    )
}

export default Message
