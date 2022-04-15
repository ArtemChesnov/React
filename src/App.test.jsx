import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import '@testing-library/user-event';
import { App } from './App';

describe('App', () => {
  it('Render component', () => {
    render(<App />);
  });

  it('Render with snapshot', () => {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
  });
});
