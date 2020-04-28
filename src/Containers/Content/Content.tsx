import React, { Component } from 'react'

import { Route, Switch, RouteComponentProps } from 'react-router-dom'

import ChoicesPanel from '../../Components/ChoicesPanel/ChoicesPanel'
import ExerciseInfoPanel from './ExerciseInfoPanel/ExerciseInfoPanel'
import MainPanel from './MainPanel/MainPanel'
import ProgressPanel from './ProgressPanel/ProgressPanel'
import { Links } from '../../Types/Enums/enumsList'

interface IDetailProps extends RouteComponentProps {

}

export default class Content extends Component<IDetailProps> {
    render() {
        return (
                <Switch>
                    <Route path={this.props.match.url + Links.TRAINING} component={MainPanel} />
                    <Route path={this.props.match.url + Links.INFORMATION} component={ExerciseInfoPanel} />
                    <Route path={this.props.match.url + Links.PROGRESS} component={ProgressPanel} />
                    <Route path={this.props.match.url} component={ChoicesPanel} />
                </Switch>
        )
    }
}
