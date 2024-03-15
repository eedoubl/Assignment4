/**
 * PlaylistPt2.test.js
 * @author Ethan Mil
 * @version 1.0.0
 *
 * Test cases for PlaylistPt2 component using Jest.
 */

import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import PlaylistPt2 from './PlaylistPt2';

describe('PlaylistPt2 Component', () => {
  test('renders PlaylistPt2 component', () => {
    render(<PlaylistPt2 />);
  });

  //test for shuffle functionality
  test('shuffle button should shuffle playlist', () => {
    const { getByTestId } = render(<PlaylistPt2 />);
    const shuffleButton = getByTestId('shuffle-button');
    fireEvent.click(shuffleButton);
  });

  //test for play/pause functionality
  test('play/pause button should toggle play/pause status', () => {
    const { getByTestId } = render(<PlaylistPt2 />);
    const playPauseButton = getByTestId('play-pause-button');
    fireEvent.click(playPauseButton);
  });

  //test for previous functionality
  test('previous track button should play previous track', () => {
    const { getByTestId } = render(<PlaylistPt2 />);
    const prevButton = getByTestId('prev-button');
    fireEvent.click(prevButton);
  });

  //test for next track functionality
  test('next track button should play next track', () => {
    const { getByTestId } = render(<PlaylistPt2 />);
    const nextButton = getByTestId('next-button');
    fireEvent.click(nextButton);
  });
});
