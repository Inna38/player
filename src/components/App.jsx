import React from 'react';
import { Component } from 'react';
import { VideoList } from './VideoList/VideoList';
import { Player } from './Player/Player';
import videos from '../videos.json';

export class App extends Component {
  state = {
    selectedVideo: null,
  };

  selectedVideo = link => {
    this.setState({
      selectedVideo: link,
    });
  };

  render() {
    return (
      <div>
        <h2>Selected video: {this.state.selectedVideo}</h2>
        <VideoList videos={videos} onSelect={this.selectedVideo} />
        <Player url={this.state.selectedVideo} />
      </div>
    );
  }
}
