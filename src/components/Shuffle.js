/**
  Shuffle.js
  @author Ethan Mil
  @version 1.0.0

  A React component that defines the Shuffle button for the playlist.
*/

import React from 'react';

const ShuffleButton = ({ onClick }) => {
  return (<button onClick={onClick} data-testid="shuffle-button">Shuffle</button>
  );
};

export default ShuffleButton;
