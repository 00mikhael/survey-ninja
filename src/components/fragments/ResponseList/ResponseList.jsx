import React from 'react'
import FadeIn from 'react-fade-in/lib/FadeIn'
import { Link } from 'react-router-dom'

import Heading from '../Heading'
import Ranking from '../Ranking'

import {
    responsesData as data,
    mockResponseData as list
} from '../../../appData'

const ResponseList = () => {
    let count = 0
    return (
        <FadeIn
            className={`list flex flex-col justify-center  w-full space-y-4 mt-16 p-4 max-w-lg mx-auto`}
        >
            <Heading title={data.responseList.title} size={3} />
            {list &&
                list.map(item => {
                    count++
                    return (
                        <ResponseItem
                            key={item.id}
                            count={count}
                            designation={item.designation}
                            score={item.score}
                        />
                    )
                })}
        </FadeIn>
    )
}

const ResponseItem = ({ count, designation, score }) => {
    return (
        <Link
            to={`/responses/list/${designation.toLowerCase()}`}
            className={`flex-grow max-w-lg w-full h-auto shadow-lg hover:shadow-md rounded-lg border border-gray-100 overflow-hidden my-2 sm:my-0 mx-auto p-6 bg-white text-lg flex items-center justify-between`}
        >
            <span className={`font-bold`}>{`${count}. ${designation}`}</span>
            <Ranking score={score} />
        </Link>
    )
}

export default ResponseList
