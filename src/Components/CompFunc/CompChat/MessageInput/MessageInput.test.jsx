import React from 'react';
import { MessageInput } from './MessageInput';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('MessageInput', () => {
  it('render component', () => {
    render(<MessageInput />);
  });
  it('textarea to be in document', () => {
    render(<MessageInput />);
    expect(
      screen.getByPlaceholderText('Напишите сообщение...')
    ).toBeInTheDocument();
  });

  it('render with snapshot', () => {
    const { asFragment } = render(<MessageInput />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('multiple render', () => {
    render(
      <>
        <MessageInput />
        <MessageInput />
      </>
    );
    expect(screen.getAllByRole('textbox').length).toBe(2);
  });

  it('render with value', () => {
    const mock = jest.fn();
    render(<MessageInput setMessageValue={mock} />);

    fireEvent.input(screen.getByPlaceholderText('Напишите сообщение...'), {
      target: { value: 'message' },
    });
    expect(screen.getByDisplayValue(/message/)).toBeInTheDocument();
  });

  it('textarea value change by typing', () => {
    const mock = jest.fn();
    render(<MessageInput setMessageValue={mock} />);

    const textarea = screen.getByPlaceholderText('Напишите сообщение...');

    fireEvent.change(textarea, { target: { value: 'message' } });

    expect(textarea.value).toBe('message');
  });
});
