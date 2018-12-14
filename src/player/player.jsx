import React from 'react';
import './player.scss'
import VideoJs from 'video.js'

class Player extends React.Component {
    state = {

    }
    render () {
        return (
            <div id="react-player">
                <video ref="video" autoPlay controls src={this.props.playerOption.url}></video>
            </div>
        )
    }
}

export default Player