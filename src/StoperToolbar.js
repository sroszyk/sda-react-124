import React from "react";

function StoperToolbar(props) {
    return (
        <div>
            {!props.isActive && <button onClick={props.startStoper}>Start</button>}
            {!props.isActive && <button onClick={props.resetStoper}>Reset</button>}
            {props.isActive && <button onClick={props.stopStoper}>Stop</button>}
            {props.isActive && <button onClick={props.addRound}>Round</button>}
        </div>
    )
}

export default StoperToolbar;