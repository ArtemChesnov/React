import React from 'react';
import { MessageInput } from './MessageInput';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
// import { userEvent } from '@testing-library/user-event';
// import { waitFor } from '@storybook/testing-library';

describe('MessageInput', () => {
  it('render component', () => {
    render(<MessageInput />);
  });

  it('render with snapshot', () => {
    const { asFragment } = render(<MessageInput />);
    expect(asFragment()).toMatchSnapshot();
  });
});
