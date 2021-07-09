import { Route } from 'react-router-dom'

import ResponseList from '../fragments/ResponseList'
import ResponseDetail from '../fragments/ResponseDetail'
import OptionsList from '../fragments/OptionsList'

import { FiArrowLeft } from 'react-icons/fi'

import { homeData as data } from '../../appData'

const Main = ({ className }) => {
    return (
        <main className={className}>
            {/* <Route exact path={['/', '/posts']} component={Home} />
            <Route exact path={'/posts/:id'} component={Detail} />
            <Route exact path={'/dashboard'} component={Dashboard} />
            <Route
                exact
                path={'/resetPassword/:resetToken/:id'}
                component={ResetPassword}
            />
            <Route
                exact
                path={'/cancelPasswordReset/:resetToken/:id'}
                component={CancelPasswordReset}
            /> */}
        </main>
    )
}

export default Main
