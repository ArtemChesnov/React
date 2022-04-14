import React from 'react';
import { AutorInput } from './AutorInput';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
// import { userEvent } from '@testing-library/user-event';
// import { waitFor } from '@storybook/testing-library';

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
});
