import React from "react"
import "./Backdrop.scss"

interface IDetailProps {
  sideDrawerClick: () => void
}

export const MainBackdrop: React.FC<IDetailProps> = (props) => {
  return <div className="mainBackdrop" onClick={props.sideDrawerClick} />
}
