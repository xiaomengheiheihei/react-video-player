import React from 'react';
import ReactDOM from 'react-dom';
import Player from './player/player'

class Index extends React.Component {

    render () {
        return (
            <div>
                <Player />  
            </div>
        )
    }
}

ReactDOM.render((
    <Index />
), document.getElementById('app'));