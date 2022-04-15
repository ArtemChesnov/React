import React from 'react';
import { AutorInput } from '../AutorInput/AutorInput';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
const { default: userEvent } = require('@testing-library/user-event');
import { waitFor } from '@storybook/testing-library';

describe('AutorInput', () => {
  it('render component', () => {
    render(<AutorInput />);
  });

  it('render with snapshot', () => {
    const { asFragment } = render(<AutorInput />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('render component with text', () => {
    render(<AutorInput />);
    expect(
      screen.getByPlaceholderText('Введите ваше имя...')
    ).toBeInTheDocument();
  });

  it('button async click', () => {
    const func = jest.fn();
    render(<AutorInput change={jest.fn()} text={'text'} click={func} />);

    userEvent.click(screen.getByPlaceholderText('Введите ваше имя...'));

    waitFor(() => expect(func).toBeCalledTimes(2));
  });
});
