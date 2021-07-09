import { Route } from 'react-router-dom'

import Home from '../pages/Home'
import Quiz from '../pages/Quiz'
import QuizResult from '../fragments/QuizResult'
import Responses from '../pages/Responses'
import ResponseList from '../fragments/ResponseList'
import ResponseDetail from '../fragments/ResponseDetail'

const Main = ({ className }) => {
    return (
        <main className={className}>
            <Route
                exact
                path={['/', '/home', '/instructions']}
                component={Home}
            />
            <Route exact path={['/quiz', '/quiz/:idx']} component={Quiz} />
            <Route
                exact
                path={['/quiz/result/:designation']}
                component={QuizResult}
            />
            <Route exact path={'/responses'} component={Responses} />
            <Route exact path={'/responses/list'} component={ResponseList} />
            <Route
                exact
                path={'/responses/list/:designation'}
                component={ResponseDetail}
            />
        </main>
    )
}

export default Main
