import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import '@testing-library/user-event';
import { MessageForm } from './MessageForm';
import { Provider } from 'react-redux';
import { store } from '../../../store';

describe('MessageForm', () => {
  it('Render component', () => {
    render(
      <Provider store={store}>
        <MessageForm />
      </Provider>
    );
  });

  it('render with snapshot', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <MessageForm />
      </Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('have a input', () => {
    render(
      <Provider store={store}>
        <MessageForm />
      </Provider>
    );
    fireEvent.input(screen.getByPlaceholderText('Введите ваше имя...'), {
      target: { value: 'Test' },
    });
    expect(screen.getByPlaceholderText('Введите ваше имя...')).toContainHTML(
      'Test'
    );
  });

  it('have a textarea', () => {
    render(
      <Provider store={store}>
        <MessageForm />
      </Provider>
    );
    fireEvent.input(screen.getByPlaceholderText('Напишите сообщение...'), {
      target: { value: 'Test' },
    });
    expect(screen.getByPlaceholderText('Напишите сообщение...')).toContainHTML(
      'Test'
    );
  });

  it('have a button', () => {
    render(
      <Provider store={store}>
        <MessageForm />
      </Provider>
    );
    expect(screen.getByText('Отправить')).toHaveClass('message__button');
  });

  it('send a message', () => {
    render(
      <Provider store={store}>
        <MessageForm />
      </Provider>
    );
    fireEvent.input(screen.getByPlaceholderText('Напишите сообщение...'), {
      target: { value: 'Message' },
    });
    fireEvent.click(screen.getByRole('button'));
    expect(screen.getByText(/Message/)).toBeInTheDocument();
  });
});
