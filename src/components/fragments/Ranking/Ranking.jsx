import React from 'react'

import { rankings } from '../../../appData'

const Ranking = ({ score, size }) => {
    const [ranking, setRanking] = React.useState()

    React.useEffect(() => {
        for (let rank of rankings) {
            if (score >= rank.minimum) {
                setRanking(rank)
            }
        }
    }, [score])

    return (
        <span className={`flex flex-col items-center max-w-min font-bold`}>
            <span
                style={{
                    fontSize: `${size}px`,
                    color: `${ranking?.color}`
                }}
            >
                {ranking?.rank}
            </span>
            <span
                style={{ fontSize: `${size / 1.5}px`, marginTop: '-5%' }}
            >{`${score}/100`}</span>
        </span>
    )
}

export default Ranking
