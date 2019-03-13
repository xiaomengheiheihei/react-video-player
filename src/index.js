import React from 'react';
import ReactDOM from 'react-dom';
import Player from './player/player.jsx'

class Index extends React.Component {

    state = {
        playerOption: {
            sources: [
                // {
                //     type: "video/mp4",
                //     src: "http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
                // },
                {
                    type: "rtmp/mp4",
                    src: 'rtmp://pili-publish.tt.test.cloudvdn.com/test-demo01/1084787021836214273@wmt_abckey94'
                }
            ],
            autoPlay: "muted",
            preload: "auto",
            width: "400px",
            height: "220px",
            techOrder: ["html5","flash"],
            plugins: {},
            controls: true,
            language: 'zh-CN',
            overNative: true,
            sourceOrder: true,
            // controlBar: {
            //     remainingTimeDisplay: false,
            //     playToggle: {},
            //     progressControl: {},
            //     fullscreenToggle: {},
            //     volumeMenuButton: {
            //       inline: false,
            //       vertical: true
            //     }
            // }
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