import React, { Component } from 'react';

import {
    Analyser,
    Song,
    Sequencer,
    Sampler,
    Synth,
    Reverb,
    Delay,
    Bitcrusher,
    Chorus,
    Compressor,
    Filter,
    Gain,
    Overdrive,
    PingPong,
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
                    tempo={110}
                >
                    <Analyser onAudioProcess={this.handleAudioProcess}>
                        <Sequencer
                            resolution={16}
                            bars={1}
                        >
                            <Sampler
                                sample="./samples/kick.wav"
                                steps={[0, 4, 8, 12]}
                            />
                            <Sampler
                                sample="./samples/hihat.wav"
                                steps={[0, 2, 4, 6, 8, 10, 12, 14]}
                            />
                            <Sampler
                                sample="./samples/snare.wav"
                                steps={[4, 12]}
                            />
                        </Sequencer>
                        <Sequencer
                            resolution={16}
                            bars={2}
                        >
                            <Synth
                                type="sine"
                                steps={[
                                    [0, 4,  'e3'],
                                    [4, 4,  'e3'],
                                    [8, 4, 'e3'],
                                    [14, 1, 'e3'],
                                    [16, 2, 'e3'],
                                    [18, 2, 'e3'],
                                    [20, 2, 'g3'],
                                    [22, 1, 'f#3'],
                                    [23, 5, 'a3'],
                                    [30, 1, 'f#3'],
                                    [31, 1, 'g3']
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
