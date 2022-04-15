import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MessageList } from './MessageList';

describe('MessageList', () => {
  it('Render component', () => {
    render(
      <MessageList
        message={[{ value: 'Render', author: 'Render', now: '1' }]}
      />
    );
  });

  it('Render with snapshot', () => {
    const { asFragment } = render(
      <MessageList
        message={[{ value: 'Render', author: 'Render', now: '1' }]}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('Render with text', () => {
    render(<MessageList message={[{ value: 'Render', autor: 'Render' }]} />);
    expect(screen.getAllByText(/Render/));
  });
});
