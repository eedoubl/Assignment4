/**
  Next.js
  @author Ethan Mil
  @version 1.0.0

  A React component that defines the Next button for the playlist.
*/

import React from 'react';

const NextButton = ({ onClick }) => {
  return (<button onClick={onClick} data-testid="next-button">Next</button>
  );
};

export default NextButton;

