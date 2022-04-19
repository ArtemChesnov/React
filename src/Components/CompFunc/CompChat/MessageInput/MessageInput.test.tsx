import React from 'react';
import { MessageInput } from './MessageInput';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('MessageInput', () => {
  it('render component', () => {
    render(<MessageInput messageValue="" setMessageValue={jest.fn()} />);
  });
  it('textarea to be in document', () => {
    render(<MessageInput messageValue="" setMessageValue={jest.fn()} />);
    expect(
      screen.getByPlaceholderText('Напишите сообщение...')
    ).toBeInTheDocument();
  });

  it('render with snapshot', () => {
    const { asFragment } = render(
      <MessageInput messageValue="" setMessageValue={jest.fn()} />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('multiple render', () => {
    render(
      <>
        <MessageInput messageValue="" setMessageValue={jest.fn()} />
        <MessageInput messageValue="" setMessageValue={jest.fn()} />
      </>
    );
    expect(screen.getAllByRole('textbox').length).toBe(2);
  });

  it('render with value', () => {
    render(<MessageInput messageValue="message" setMessageValue={jest.fn()} />);
    expect(
      screen.getByPlaceholderText('Напишите сообщение...')
    ).toHaveTextContent(/message/);
  });
});
