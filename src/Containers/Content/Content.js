import React, { Component } from 'react'

import { Route, Switch} from 'react-router-dom'

import ChoicesPanel from '../../Components/ChoicesPanel/ChoicesPanel'
import ExerciseInfoPanel from './ExerciseInfoPanel/ExerciseInfoPanel'
import MainPanel from './MainPanel/MainPanel'
import ProgressPanel from './ProgressPanel/ProgressPanel'

export class Content extends Component {
    render(props) {
        return (
            <React.Fragment>
                <Switch>
                    <Route path={this.props.match.url + '/trening'} component={MainPanel} />
                    <Route path={this.props.match.url + '/informacje'} component={ExerciseInfoPanel} />
                    <Route path={this.props.match.url + '/postepy'} component={ProgressPanel} />
                    <Route path={this.props.match.url} component={ChoicesPanel} />
                </Switch>
            </React.Fragment>

        )
    }
}

export default Content
