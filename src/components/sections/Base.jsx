import PatternBG from '../../assets/patternBG.png'

const Base = ({ className, children }) => {
    return (
        <div
            style={{
                backgroundImage: `url(${PatternBG})`
            }}
            className={`${className} h-screen bg-no-repeat bg-center bg-cover opacity-100 bg-rose-500`}
        >
            {children}
        </div>
    )
}

export default Base
