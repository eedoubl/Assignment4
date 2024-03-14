/**
  Podcast.js
  @author Ethan Mil
  @version 1.0.0

  A React component that defines a podcast with the attributes of season (an integer), episode (an integer), and episodeTitle (a string).
*/

import React from 'react';

const Podcast = ({ season, episode, episodeTitle }) => {
  return (
    <div style={{ padding: '1px'}}>
      <h3 style={{textDecoration: 'underline' }}>Podcast Details</h3>
      {season !== undefined ? (
        <p>Season {season} Episode {episode}</p>
      ) : (
        <p>Episode {episode}</p>
      )}
      <p>Title: {episodeTitle}</p>
    </div>
  );
};

export default Podcast;
