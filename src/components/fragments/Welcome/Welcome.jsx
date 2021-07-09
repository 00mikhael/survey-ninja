import React from 'react'

const Welcome = ({ name }) => {
    return (
        <div className={`mb-6 text-lg text-rose-500`}>{`Welcome, ${name.substr(
            0,
            15
        )}${name.length >= 16 ? `...` : ``}`}</div>
    )
}

export default Welcome
