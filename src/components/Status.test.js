/**
  Status.test.js
  @author Ethan Mil
  @version 1.0.0

  Test cases for Status component using Jest.
*/

import React from 'react';
import { render } from '@testing-library/react';
import Status from './Status';

describe('Status Component', () => {
  test('renders Status component', () => {
    render(<Status status="Playing: Some Track" />);
  });

  test('renders status correctly', () => {
    const { getByText } = render(<Status status="Playing: Some Track" />);
    expect(getByText('Playing: Some Track')).toBeInTheDocument();
  });
});
