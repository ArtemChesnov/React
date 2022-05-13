import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import '@testing-library/user-event';
import { MessageForm } from './MessageForm';
import { Provider } from 'react-redux';
import { store } from '../../../store';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

describe('MessageForm', () => {
  it('Render component', () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/chats/gb']} initialIndex={0}>
          <Routes>
            <Route path="/chats/:chatId" element={<MessageForm />} />
          </Routes>
        </MemoryRouter>
      </Provider>
    );
  });

  it('multiple render', () => {
    render(
      <>
        <Provider store={store}>
          <MemoryRouter initialEntries={['/chats/gb']} initialIndex={0}>
            <Routes>
              <Route path="/chats/:chatId" element={<MessageForm />} />
            </Routes>
          </MemoryRouter>
        </Provider>
        <Provider store={store}>
          <MemoryRouter initialEntries={['/chats/gb']} initialIndex={0}>
            <Routes>
              <Route path="/chats/:chatId" element={<MessageForm />} />
            </Routes>
          </MemoryRouter>
        </Provider>
      </>
    );
    expect(screen.getAllByRole('textbox').length).toBe(4);
  });

  it('Render with snapshot', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/chats/default']} initialIndex={0}>
          <Routes>
            <Route path="/chats/:chatId" element={<MessageForm />} />
          </Routes>
        </MemoryRouter>
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
  it('Empty message sending', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/chats/gb']} initialIndex={0}>
          <Routes>
            <Route path="/chats/:chatId" element={<MessageForm />} />
          </Routes>
        </MemoryRouter>
      </Provider>
    );
    fireEvent.input(screen.getByPlaceholderText('Напишите сообщение...'), {
      target: { value: '' },
    });
    fireEvent.click(screen.getByRole('button'));
    expect(asFragment()).toMatchSnapshot();
  });

  it('Filled message sending', () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/chats/gb']} initialIndex={0}>
          <Routes>
            <Route path="/chats/:chatId" element={<MessageForm />} />
          </Routes>
        </MemoryRouter>
      </Provider>
    );
    fireEvent.input(screen.getByPlaceholderText('Напишите сообщение...'), {
      target: { value: 'Test' },
    });
    fireEvent.click(screen.getByRole('button'));
    expect(screen.getByText(/Test/)).toBeInTheDocument();
  });
  it('Wrong route test', () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/chats/gb']} initialIndex={0}>
          <Routes>
            <Route path="/chats/:chatId" element={<MessageForm />} />
          </Routes>
        </MemoryRouter>
      </Provider>
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
  it('have a input', () => {
    render(
      <Provider store={store}>
        <MessageForm />
      </Provider>
    );
    expect(screen.getByPlaceholderText('Введите ваше имя...')).toHaveClass(
      'autor__input'
    );
  });

  it('Remember username', () => {
    render(
      <Provider store={store}>
        <MessageForm />
      </Provider>
    );
    fireEvent.change(screen.getByPlaceholderText('Введите ваше имя...'), {
      target: { value: 'TestUsername' },
    });
    fireEvent.click(screen.getByText('Отправить'));
    expect(
      (screen.getByPlaceholderText('Введите ваше имя...') as HTMLInputElement)
        .value
    ).toBe('TestUsername');
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
