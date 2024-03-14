/**
  Song.test.js
  @author Ethan Mil
  @version 1.0.0

  Test cases for Song component using Jest.
*/

import React from 'react';
import { render } from '@testing-library/react';
import Song from './Song';

describe('Song Component', () => {
  test('renders Song component', () => {
    render(<Song title="Some Title" artist="Some Artist" year={2022} />);
  });

  test('renders song details correctly', () => {
    const { getByText } = render(<Song title="Some Title" artist="Some Artist" year={2022} />);
    expect(getByText('Some Title')).toBeInTheDocument();
    expect(getByText('Artist: Some Artist')).toBeInTheDocument();
    expect(getByText('Year: 2022')).toBeInTheDocument();
  });

  test('handles invalid data types gracefully', () => {
    //rendering a song with a string instead of an integer for the year
    const { getByText } = render(<Song title="Some Title" artist="Some Artist" year="invalid" />);
    //expect the component to render "Year: N/A"
    expect(getByText('Year: N/A')).toBeInTheDocument();
  });
});
