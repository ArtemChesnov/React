import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import '@testing-library/user-event';
import { MessageForm } from './MessageForm';

describe('MessageForm', () => {
  it('Render component', () => {
    render(<MessageForm addMessage={Object} />);
  });

  it('render with snapshot', () => {
    const { asFragment } = render(<MessageForm addMessage={Object} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('render multiply components', () => {
    render(
      <>
        <MessageForm addMessage={Object} />
        <MessageForm addMessage={Object} />
      </>
    );
    expect(screen.queryAllByTestId('form').length).toBe(2);
  });

  it('have a input', () => {
    render(<MessageForm addMessage={Object} />);
    fireEvent.input(screen.getByPlaceholderText('Введите ваше имя...'), {
      target: { value: 'Test' },
    });
    expect(screen.getByPlaceholderText('Введите ваше имя...')).toContainHTML(
      'Test'
    );
  });

  it('have a textarea', () => {
    render(<MessageForm addMessage={Object} />);
    fireEvent.input(screen.getByPlaceholderText('Напишите сообщение...'), {
      target: { value: 'Test' },
    });
    expect(screen.getByPlaceholderText('Напишите сообщение...')).toContainHTML(
      'Test'
    );
  });

  it('have a button', () => {
    render(<MessageForm addMessage={Object} />);
    expect(screen.getByText('Отправить')).toHaveClass('message__button');
  });

  it('send a message', () => {
    render(<MessageForm addMessage={Object} />);
    fireEvent.input(screen.getByPlaceholderText('Напишите сообщение...'), {
      target: { value: 'Message' },
    });
    fireEvent.click(screen.getByRole('button'));
    expect(screen.getByText(/Message/)).toBeInTheDocument();
  });

  it('form submit test', () => {
    const mockHandler = jest.fn();
    render(<MessageForm addMessage={mockHandler} />);
    fireEvent.submit(screen.getByTestId('form'));
    expect(mockHandler).toBeCalledTimes(1);
  });
});
