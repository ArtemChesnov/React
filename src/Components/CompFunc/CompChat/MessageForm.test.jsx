import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import '@testing-library/user-event';
import { MessageForm } from './MessageForm';

describe('MessageForm', () => {
  it('Render component', () => {
    render(<MessageForm />);
  });

  it('Render with snapshot', () => {
    const { asFragment } = render(<MessageForm />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('Input test', () => {
    render(<MessageForm />);
    fireEvent.input(screen.getByPlaceholderText('Введите ваше имя...'), {
      target: { value: 'Test' },
    });
    expect(screen.getByPlaceholderText('Введите ваше имя...')).toContainHTML(
      'Test'
    );
  });

  it('Textarea test', () => {
    render(<MessageForm />);
    fireEvent.input(screen.getByPlaceholderText('Напишите сообщение...'), {
      target: { value: 'Test' },
    });
    expect(screen.getByPlaceholderText('Напишите сообщение...')).toContainHTML(
      'Test'
    );
  });

  it('button test', () => {
    render(<MessageForm />);
    expect(screen.getByText('Отправить')).toHaveClass('message-button');
  });

  it('Send a message', () => {
    render(<MessageForm />);
    fireEvent.input(screen.getByPlaceholderText('Напишите сообщение...'), {
      target: { value: 'Test' },
    });
    fireEvent.click(screen.getByRole('button'));
    expect(screen.getByText(/Test/)).toBeInTheDocument();
  });

  it('Send a empty message', () => {
    const { asFragment } = render(<MessageForm />);
    fireEvent.input(screen.getByPlaceholderText('Введите ваше имя...'), {
      target: { value: '' },
    });
    fireEvent.input(screen.getByPlaceholderText('Напишите сообщение...'), {
      target: { value: '' },
    });
    fireEvent.click(screen.getByRole('button'));
    expect(asFragment()).toMatchSnapshot();
  });

  // it('Bot answer', async () => {
  //   render(<MessageForm />);
  //   fireEvent.input(screen.getByPlaceholderText('Введите ваше имя...'), {
  //     target: { value: 'Autor' },
  //   });
  //   fireEvent.input(screen.getByPlaceholderText('Напишите сообщение...'), {
  //     target: { value: 'Hi' },
  //   });
  //   fireEvent.click(screen.getByRole('button'));
  //   expect(
  //     await screen.findByText(/Привет Autor, ты скучный/),
  //   ).toBeInTheDocument();
  // });

  // it('onSubmit to have been called', async () => {
  //   const mock = jest.fn();
  //   render(<MessageForm onSubmit={mock} />);
  //   // Arrange
  //   fireEvent.input(screen.getByPlaceholderText('Напишите сообщение...'), {
  //     target: { value: 'Test' },
  //   });

  //   fireEvent.input(screen.getByPlaceholderText('Напишите сообщение...'), {
  //     target: { value: '' },
  //   });
  //   fireEvent.click(screen.getByRole('button'));
  //   // Act
  //   fireEvent.submit(screen.getByTestId('form'));
  //   // Assert
  //   expect(mock).toHaveBeenCalled();
  // });
});
