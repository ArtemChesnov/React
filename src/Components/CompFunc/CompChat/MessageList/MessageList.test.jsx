import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MessageList } from './MessageList';

describe('MessageList', () => {
  it('Render component', () => {
    render(
      <MessageList
        message={[{ author: 'Autor', value: 'Message', now: '11-00' }]}
      />
    );
  });

  it('render with snapshot', () => {
    const { asFragment } = render(
      <MessageList
        message={[{ author: 'Autor', value: 'Message', now: '11-00' }]}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('render with text', () => {
    render(
      <MessageList
        message={[{ autor: 'Render', value: 'Render', now: '11-00' }]}
      />
    );
    expect(screen.getAllByText(/Render/));
  });
});
