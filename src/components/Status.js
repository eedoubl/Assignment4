/**
  Status.js
  @author Ethan Mil
  @version 1.0.0

  A React component that defines the status (what is playing) for the playlist.
*/

import React from 'react';

const Status = ({ status }) => {
  return (
    <div>
      <h2>Status</h2>
      <p>{status}</p>
    </div>
  );
};

export default Status;
