import React from "react";

class StoperToolbar extends React.Component {
    render() {
        return (
            <div>
                {!this.props.isActive && <button onClick={this.props.startStoper}>Start</button>}
                {!this.props.isActive && <button onClick={this.props.resetStoper}>Reset</button>}
                {this.props.isActive && <button onClick={this.props.stopStoper}>Stop</button>}
                {this.props.isActive && <button onClick={this.props.addRound}>Round</button>}
            </div>
        )
    }
}

export default StoperToolbar;