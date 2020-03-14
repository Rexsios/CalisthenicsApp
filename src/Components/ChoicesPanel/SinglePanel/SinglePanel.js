import React from 'react'
import './SinglePanel.scss'

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
        <div className="singlePanel" onKeyPress={() => props.choice(props.number)} onClick={() => props.choice(props.number)} tabIndex="0">
            <div className="singlePanel__image">
                {svgShow}
            </div>
            <h2 className="singlePanel__title">
                {props.title}
            </h2>
            <span className="singlePanel__description">
                {props.description}
            </span>
        </div>
    )
}

export default singlePanel
