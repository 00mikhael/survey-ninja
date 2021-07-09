import React from 'react'

const Heading = ({ title, subtitle, size }) => {
    return (
        <div className={`flex flex-col`}>
            <span
                className={`${
                    size === 3
                        ? `text-2xl`
                        : size === 2
                        ? `text-4xl`
                        : `text-6xl`
                } font-bold`}
            >
                {title}
            </span>
            {subtitle && (
                <span className={`text-base my-2 text-gray-900`}>
                    {subtitle}
                </span>
            )}
        </div>
    )
}

export default Heading
