import { Component } from 'react';
import ReactPlayer from 'react-player';

import css from "./Player.module.css";

export class Player extends Component {
  state = {
    isVideoLoader: false,
  };

  componentDidUpdate(prevProps) {
    if (prevProps.url !== this.props.url) {
      this.setState({
        isVideoLoader: false,
      });
    }
  }

  render() {
    const { isVideoLoader } = this.state;
    const { url } = this.props;
    const showLoader = url && !isVideoLoader
    const playerSize = isVideoLoader ? '100%' : 0
    return (
      <div className={css.container}>
        {showLoader && <h2 className={css.styledPlayer}>Loader</h2>}
        {url && (
          <ReactPlayer className={css.styledPlayer}
            url={url}
            width={playerSize}
            height={playerSize}
            onReady={() => this.setState({ isVideoLoader: true })}
            controls
          />
        )}
      </div>
    );
  }
}
