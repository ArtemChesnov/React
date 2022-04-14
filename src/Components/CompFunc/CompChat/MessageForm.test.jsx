import React from 'react';
import { MessageForm } from './MessageForm';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
// import { userEvent } from '@testing-library/user-event';
// import { waitFor } from '@storybook/testing-library';

describe('MessageForm', () => {
  it('render component', () => {
    render(<MessageForm />);
  });

  it('render with snapshot', () => {
    const { asFragment } = render(<MessageForm />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('render component with text', () => {
    render(<MessageForm />);
    expect(
      screen.getByPlaceholderText('Введите ваше имя...')
    ).toBeInTheDocument();
  });
});
