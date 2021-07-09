// import { Route } from 'react-router-dom'

import OptionsList from '../fragments/OptionsList'

const Main = ({ className }) => {
    return (
        <main className={className}>
            <OptionsList />
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
