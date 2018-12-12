import React from 'react';
import ReactDOM from 'react-dom';
import Player from './player/player'

class Index extends React.Component {

    render () {
        return (
            <div>111111</div>
            <Player />
        )
    }
}

ReactDOM.render((
    <Index />
), document.getElementById('app'));