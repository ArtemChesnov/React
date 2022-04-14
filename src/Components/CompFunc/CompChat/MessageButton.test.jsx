import React from 'react';
import { MessageButton } from './MessageButton';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
// import { userEvent } from '@testing-library/user-event';
// import { waitFor } from '@storybook/testing-library';

describe('MessageButton', () => {
  it('render component', () => {
    render(<MessageButton />);
  });

  it('render with snapshot', () => {
    const { asFragment } = render(<MessageButton />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('render component with text', () => {
    render(<MessageButton />);
    expect(screen.getByText(/Отправить/)).toBeInTheDocument();
  });

  it('render multiply components', () => {
    render(
      <>
        <MessageButton />
        <MessageButton />
      </>
    );

    expect(screen.queryAllByRole('button').length).toBe(2);
  });

  it('button is disabled', () => {
    render(<MessageButton disabled />);
    expect(screen.getByText('Отправить')).toBeDisabled();
  });

  it('button have style message-button', () => {
    render(<MessageButton />);
    expect(screen.getByText('Отправить')).toHaveClass('message-button');
  });

  // it('button click with userEvent', async () => {
  //   const mockHandler = jest.fn();

  //   render(<MessageButton onButtonClick={mockHandler} />);
  //   userEvent.click(screen.getByText(/Добавить/));
  //   expect(mockHandler).toBeCalledTimes(1);
  //   await waitFor(() => expect(mockHandler).toBeCalledTimes(1));
  // });

  // it('button async click', async () => {
  //   const mockHandler = jest.fn();
  //   render(
  //     <MessageButton onButtonClick={() => setTimeout(mockHandler, 1000)} />,
  //   );

  //   userEvent.click(screen.getByText(/Отправить/));

  //   await waitFor(() => expect(mockHandler).toHaveBeenCalledTimes(1), {
  //     timeout: 1100,
  //   });
  // });
});
