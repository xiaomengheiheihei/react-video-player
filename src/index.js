import React from 'react';
import ReactDOM from 'react-dom';
import Player from './player/player.jsx'

class Index extends React.Component {

    state = {
        playerOption: {
            url: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4',
        }
    }

    render () {
        return  (
            <div>
                <h3>player</h3>
                <Player 
                    playerOption={this.state.playerOption}
                />
            </div>
        )
    }
}

ReactDOM.render((
    <Index />
), document.getElementById('app'));

export default Index