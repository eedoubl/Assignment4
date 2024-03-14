/**
  Prev.js
  @author Ethan Mil
  @version 1.0.0

  A React component that defines the Previous button for the playlist.
*/

import React from 'react';

const PrevButton = ({ onClick }) => {
  return (<button onClick={onClick} data-testid="prev-button">Prev</button>
  );
};

export default PrevButton;
