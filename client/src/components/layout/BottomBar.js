import React from "react";
import logo from "../../images/Hydrospire logo clear.png"

const BottomBar = (props) => {
    return(
        <div className="bottom-bar-container">
            <div className="page-margins">
                <img src={logo} style={{height: "5rem", width: "auto", marginTop: "3rem"}}/>
            </div>
        </div>
    )
}

export default BottomBar