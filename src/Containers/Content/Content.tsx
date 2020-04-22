import React, { Component } from 'react'

import { Route, Switch, RouteComponentProps } from 'react-router-dom'

import ChoicesPanel from '../../Components/ChoicesPanel/ChoicesPanel'
import ExerciseInfoPanel from './ExerciseInfoPanel/ExerciseInfoPanel'
import MainPanel from './MainPanel/MainPanel'
import ProgressPanel from './ProgressPanel/ProgressPanel'

export class Content extends Component<IDetailProps, IDetailState> {
    render() {
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

interface IDetailProps extends RouteComponentProps {

}

interface IDetailState {

}

export default Content
