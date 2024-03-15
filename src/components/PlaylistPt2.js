/**
  PlaylistPt2.js
  @author Ethan Mil
  @version 1.0.0
  
  A React component that defines a playlist that fetches songs and podcasts from a JSON file and then displays them in a react app with functional buttons simulating a playlist.
 */

import React, { useEffect, useState } from 'react';
import Song from './Song';
import Podcast from './Podcast';
import ShuffleButton from './Shuffle';
import PlayPauseButton from './Playpause';
import PrevButton from './Prev';
import NextButton from './Next';
import Status from './Status';
import '../App.css';

const PlaylistPt2 = () => {
  //variables for playlist, current track index, play/pause status, and current status
  const [playlist, setPlaylist] = useState([]);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [status, setStatus] = useState('');

  //effect hook to fetch audio_tracks.json from 3001/tracks
  useEffect(() => {
    //fetch audio_tracks.json
    const fetchAudioTracks = async () => {
      const response = await fetch('https://raw.githubusercontent.com/eedoubl/Assignment4/main/src/components/audio_tracks.json');
      const data = await response.json();
      setPlaylist(data.tracks);
    };

    fetchAudioTracks();
  }, []);

  //function for shuffle
  const handleShuffle = () => {
    const shuffledPlaylist = shuffleArray([...playlist]);
    setPlaylist(shuffledPlaylist);
    setCurrentTrackIndex(0);
  };

 //function for play/pause button click
const handlePlayPause = () => {
  setIsPlaying(!isPlaying);
  if (playlist[currentTrackIndex]?.episodeTitle) {
    setStatus(`Playing: ${playlist[currentTrackIndex].episodeTitle}`);
  } else if (playlist[currentTrackIndex]?.title) {
    setStatus(`Playing: ${playlist[currentTrackIndex].title}`);
  }
};


  //function for previous track button click
  const handlePrevTrack = () => {
    setCurrentTrackIndex((prevIndex) => (prevIndex === 0 ? playlist.length - 1 : prevIndex - 1));
    if (playlist[currentTrackIndex]) {
    if (playlist[currentTrackIndex].episodeTitle) {
      setStatus(`Playing: ${playlist[currentTrackIndex].episodeTitle}`);
    } else {
      setStatus(`Playing: ${playlist[currentTrackIndex].title}`);
    }
    }
  };

  //function for next track button click
  const handleNextTrack = () => {
    setCurrentTrackIndex((prevIndex) => (prevIndex === playlist.length - 1 ? 0 : prevIndex + 1));
    if (playlist[currentTrackIndex]) {
      if (playlist[currentTrackIndex].episodeTitle) {
        setStatus(`Playing: ${playlist[currentTrackIndex].episodeTitle}`);
      } else {
        setStatus(`Playing: ${playlist[currentTrackIndex].title}`);
      }
    }
  };

  //function for double click on a song or podcast
  const handleDoubleClick = (title, episodeTitle) => {
    if (episodeTitle) {
      setStatus(`Playing: ${episodeTitle}`);
    } else {
      setStatus(`Playing: ${title}`);
    }
  };

  //function for shuffle
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  //for rendering the playlist
  return (
    <div>
      <h2>Playlist</h2>
      <h4>Double click a song or podcast to play it!</h4>
      <div className="player-controls">
        <ShuffleButton onClick={handleShuffle} />
        <PlayPauseButton isPlaying={isPlaying} onClick={handlePlayPause} />
        <PrevButton data-testid="prev-button" onClick={handlePrevTrack} />
        <NextButton onClick={handleNextTrack} />
      </div>
      <Status status={status} /> {/* display status */}
      <div className="shuffled-playlist">
        {playlist.map((item, index) => (
          <div
            key={index}
            className="insert"
            style={{ padding: '1px', backgroundColor: index === currentTrackIndex ? '#ccc' : 'transparent' }}
            onDoubleClick={() => handleDoubleClick(item.title, item.episodeTitle)}
          >
            {/* conditional for song or podcast component */}
            {item.title && item.artist && item.year && (
              <Song title={item.title} artist={item.artist} year={item.year} />
            )}
            {item.episode && item.episodeTitle && (
              <Podcast
                episode={item.episode}
                episodeTitle={item.episodeTitle}
                season={item.season}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlaylistPt2;
//end program
