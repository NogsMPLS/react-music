import React, { Component } from 'react';

import {
    Analyser,
    Song,
    Sequencer,
    Sampler,
    Synth,
} from '../src';

import Polysynth from './polysynth';
import Visualization from './visualization';

import './index.css';

export default class Demo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            playing: true,
        };

        this.handleAudioProcess = this.handleAudioProcess.bind(this);
        this.handlePlayToggle = this.handlePlayToggle.bind(this);
    }
    handleAudioProcess(analyser) {
        this.visualization.audioProcess(analyser);
    }
    handlePlayToggle() {
        this.setState({
            playing: !this.state.playing,
        });
    }
    render() {
        return (
            <div>
                <Song
                    playing={this.state.playing}
                    tempo={120}
                >
                    <Analyser onAudioProcess={this.handleAudioProcess}>
                        <Sequencer
                            resolution={16}
                            bars={2}
                        >
                            <Synth
                                type="sine"
                                steps={[
                                    [0, 4, 'c6'],
                                    [4, 2, 'a5'],
                                    [6, 4, 'f5'],
                                    [10, 4, 'c6'],
                                    [14, 4, 'bb5'],
                                    [18, 14, 'g5']
                                ]}
                            />
                        </Sequencer>
                    </Analyser>
                </Song>

                <Visualization ref={(c) => { this.visualization = c; }} />

                <button
                    className="react-music-button"
                    type="button"
                    onClick={this.handlePlayToggle}
                >
                    {this.state.playing ? 'Stop' : 'Play'}
                </button>
            </div>
        );
    }
}
