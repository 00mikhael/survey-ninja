import React from 'react'

import { appData } from '../../appData'
import { navigationData as navData } from '../../appData'

import Logo from '../fragments/Logo'
import Nav from '../fragments/Nav'

const Header = ({ className }) => {
    return (
        <header className={`${className} flex space-x-4 justify-between p-4`}>
            <Logo text={appData.name} />
            <Nav navItems={navData.navItems} />
        </header>
    )
}

export default Header
