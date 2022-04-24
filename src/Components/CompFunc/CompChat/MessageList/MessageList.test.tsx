import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MessageList } from './MessageList';

describe('MessageList', () => {
  it('Render component', () => {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    window.HTMLElement.prototype.scrollIntoView = function () {};
    render(<MessageList messages={[]} />);
  });

  it('render with snapshot', () => {
    const { asFragment } = render(<MessageList messages={[]} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('render with text', () => {
    render(
      <MessageList
        messages={[
          { id: '1', autor: 'Render', value: 'Message', now: '11-00' },
        ]}
      />
    );
    expect(screen.getAllByText(/Render/));
  });
});
