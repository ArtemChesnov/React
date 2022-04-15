import React from 'react';
import { MessageInput } from './MessageInput';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
const { default: userEvent } = require('@testing-library/user-event');
import { waitFor } from '@storybook/testing-library';

describe('MessageInput', () => {
  it('render component', () => {
    render(<MessageInput />);
  });

  it('render with snapshot', () => {
    const { asFragment } = render(<MessageInput />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('Multiple render', () => {
    render(
      <>
        <MessageInput />
        <MessageInput />
      </>
    );
    expect(screen.getAllByRole('textbox').length).toBe(2);
  });

  it('Render with value and change handler', () => {
    render(<MessageInput />);
    fireEvent.input(screen.getByRole('textbox'), {
      target: { value: 'message' },
    });
    expect(screen.getByDisplayValue(/message/)).toBeInTheDocument();
  });

  it('button async click', () => {
    const func = jest.fn();
    render(<MessageInput change={jest.fn()} text={'text'} click={func} />);

    userEvent.click(screen.getByPlaceholderText('Напишите сообщение...'));

    waitFor(() => expect(func).toBeCalledTimes(2));
  });
});
