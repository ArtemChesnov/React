import React from 'react';
import { AutorInput } from './AutorInput';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
// import { userEvent } from '@testing-library/user-event';
import { waitFor } from '@storybook/testing-library';
const { default: userEvent } = require('@testing-library/user-event');

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
      screen.getByPlaceholderText('Введите ваше имя...'),
    ).toBeInTheDocument();
  });

  it('button async click', () => {
    const func = jest.fn();
    render(<AutorInput change={jest.fn()} text={'text'} click={func} />);

    userEvent.click(screen.getByPlaceholderText('Введите ваше имя...'));

    waitFor(() => expect(func).toBeCalledTimes(2));
  });

  it('button async click', () => {
    const mockHandler = jest.fn();
    render(
      <AutorInput
        change={jest.fn()}
        text={'text'}
        click={() => setTimeout(mockHandler, 1000)}
      />,
    );

    userEvent.click(screen.getByPlaceholderText('Введите ваше имя...'));

    waitFor(() => expect(mockHandler).toHaveBeenCalledTimes(2), {
      timeout: 1100,
    });
  });
});
