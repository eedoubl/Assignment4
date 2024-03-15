/**
  Podcast.test.js
  @author Ethan Mil
  @version 1.0.0

  Test cases for Podcast component using Jest.
*/

import React from 'react';
import { render } from '@testing-library/react';
import Podcast from './Podcast';

describe('Podcast Component', () => {
  test('renders Podcast component', () => {
    render(<Podcast episode={1} episodeTitle="Episode Title" />);
  });

  test('renders podcast details correctly', () => {
    const { getByText } = render(<Podcast season={1} episode={1} episodeTitle="Episode Title" />);
    expect(getByText('Season 1 Episode 1')).toBeInTheDocument();
    expect(getByText('Title: Episode Title')).toBeInTheDocument();
  });

  test('renders correctly when Season attribute is missing', () => {
    const { getByText, queryByText } = render(<Podcast episode={1} episodeTitle="Episode Title" />);
    expect(queryByText(/Season/)).toBeNull(); //ensure "Season" text is not present
    expect(getByText(/Episode 1/)).toBeInTheDocument(); //check if "Episode 1" text is present
  });
  

  test('handles invalid data types gracefully', () => {
    const { getByText, queryByText } = render(<Podcast season="invalid" episode={1} episodeTitle="Episode Title" />);
    expect(queryByText(/Season/)).toBeInTheDocument(); //check if "Season" text is present
    expect(queryByText(/invalid/)).toBeInTheDocument(); //check if "invalid" text is present
    expect(queryByText(/N\/A/)).toBeNull(); //ensure "N/A" is not present
  });  
});
