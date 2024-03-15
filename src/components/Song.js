/**
  Song.js
  @author Ethan Mil
  @version 1.0.0

  A React component that defines a song with the attributes of title (a string), artist (a string), year (an integer).
*/

import React from 'react';

const Song = ({ title, artist, year }) => {
  let yearDisplay;
  if (typeof year === 'number' && !isNaN(year)) {
    yearDisplay = year;
  } else {
    yearDisplay = 'N/A';
  }

  return (
    <div style={{ padding: '1px'}}>
      <h3>{title}</h3>
      <p style={{ fontSize: '15px' }}>Artist: {artist}</p>
      <p>Year: {yearDisplay}</p>
    </div>
  );
};

export default Song;
