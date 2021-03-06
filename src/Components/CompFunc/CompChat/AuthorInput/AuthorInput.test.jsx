import React from 'react';
import { AuthorInput } from './AuthorInput';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Enzyme from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';
Enzyme.configure({ adapter: new Adapter() });

describe('AutorInput', () => {
  it('render component', () => {
    render(<AuthorInput authorValue="" setAuthorValue={jest.fn()} />);
  });

  it('input to be in document', () => {
    render(<AuthorInput authorValue="" setAuthorValue={jest.fn()} />);
    expect(
      screen.getByPlaceholderText('Введите ваше имя...')
    ).toBeInTheDocument();
  });

  it('multiple render', () => {
    render(
      <>
        <AuthorInput authorValue="" setAuthorValue={jest.fn()} />
        <AuthorInput authorValue="" setAuthorValue={jest.fn()} />
      </>
    );
    expect(screen.getAllByRole('textbox').length).toBe(2);
  });

  it('render with value', () => {
    render(<AuthorInput authorValue="Name" setAuthorValue={jest.fn()} />);
    expect(screen.getByDisplayValue(/Name/)).toBeInTheDocument();
  });

  it('should call onChange prop', () => {
    const onSearchMock = jest.fn();
    const event = {
      target: { value: 'the-value' },
    };
    const component = Enzyme.shallow(
      <AuthorInput authorValue="Artem" setAuthorValue={onSearchMock} />
    );
    component.find('input').simulate('change', event);
    expect(onSearchMock).toBeCalledWith('the-value');
  });

  it('input value change by typing', () => {
    const onSearchMock = jest.fn();
    const component = Enzyme.mount(
      <AuthorInput setAuthorValue={onSearchMock} authorValue="Artem" />
    );
    component.find('input').simulate('change');
    expect(onSearchMock).toBeCalledWith('Artem');
  });

  it('render with snapshot', () => {
    const { asFragment } = render(
      <AuthorInput authorValue="" setAuthorValue={jest.fn()} />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
