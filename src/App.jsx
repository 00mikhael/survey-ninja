import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import Base from './components/sections/Base'
import Container from './components/sections/Container'
import Header from './components/sections/Header'
import Main from './components/sections/Main'
import Footer from './components/sections/Footer'

function App() {
    return (
        <Router>
            <Base className={`flex flex-col px-4`}>
                <Container
                    className={`bg-white flex-1 rounded-lg max-w-6xl mx-auto w-full mt-12 p-4 flex flex-col overflow-hidden`}
                >
                    <Header
                        className={`sticky top-0 max-w-5xl mx-auto w-full`}
                    />
                    <Main
                        className={`flex-1 max-w-5xl mx-auto w-full overflow-scroll `}
                    />
                </Container>
                <Footer className={``} />
            </Base>
        </Router>
    )
}

export default App
