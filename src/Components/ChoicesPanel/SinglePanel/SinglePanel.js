import React from 'react'
import './SinglePanel.scss'

import { Link } from 'react-router-dom'

import FirstPanel from '../../../Assets/Svg/ChoicesPanelIcons/FirstPanel'
import SecondPanel from '../../../Assets/Svg/ChoicesPanelIcons/SecondPanel'
import ThirdPanel from '../../../Assets/Svg/ChoicesPanelIcons/ThirdPanel'

const singlePanel = (props) => {

    let svgShow = null;
    if (props.number === "0") {
        svgShow = <FirstPanel />
    } else if (props.number === "1") {
        svgShow = <SecondPanel />
    } else if (props.number === "2") {
        svgShow = < ThirdPanel />
    }

    return (
        <Link to={props.match.url + props.link} className="singlePanel" tabIndex="0">
            <div className="singlePanel__image">
                {svgShow}
            </div>
            <h2 className="singlePanel__title">
                {props.title}
            </h2>
            <span className="singlePanel__description">
                {props.description}
            </span>
        </Link>
    )
}

export default singlePanel
