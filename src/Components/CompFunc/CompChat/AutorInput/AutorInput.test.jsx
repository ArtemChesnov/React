import React from 'react';
import { AutorInput } from '../AutorInput/AutorInput';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('AutorInput', () => {
  it('render component', () => {
    render(<AutorInput />);
  });

  it('input to be in document', () => {
    render(<AutorInput />);
    expect(
      screen.getByPlaceholderText('Введите ваше имя...')
    ).toBeInTheDocument();
  });

  it('render with snapshot', () => {
    const { asFragment } = render(<AutorInput />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('multiple render', () => {
    render(
      <>
        <AutorInput />
        <AutorInput />
      </>
    );
    expect(screen.getAllByRole('textbox').length).toBe(2);
  });

  it('render with value', () => {
    const mock = jest.fn();
    render(<AutorInput setAutorValue={mock} />);

    fireEvent.input(screen.getByPlaceholderText('Введите ваше имя...'), {
      target: { value: 'Name' },
    });
    expect(screen.getByDisplayValue(/Name/)).toBeInTheDocument();
  });

  it('input value change by typing', () => {
    const mock = jest.fn();
    render(<AutorInput setAutorValue={mock} />);

    const input = screen.getByPlaceholderText('Введите ваше имя...');

    fireEvent.change(input, { target: { value: 'Name' } });

    expect(input.value).toBe('Name');
  });
});
