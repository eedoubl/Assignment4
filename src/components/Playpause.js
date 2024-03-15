/**
  Playpause.js
  @author Ethan Mil
  @version 1.0.0

  A React component that defines the Play/Pause button for the playlist.
*/

import React from 'react';

const PlayPauseButton = ({ isPlaying, onClick }) => {
  return (
    <button onClick={onClick} data-testid="play-pause-button">{isPlaying ? 'Pause' : 'Play'}</button>
  );
};

export default PlayPauseButton;

