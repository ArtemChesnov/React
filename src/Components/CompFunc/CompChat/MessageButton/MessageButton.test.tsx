import React from 'react';
import { MessageButton } from './MessageButton';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { waitFor } from '@storybook/testing-library';

describe('MessageButton', () => {
  it('render component', () => {
    render(<MessageButton disabled={false} />);
  });

  it('render with snapshot', () => {
    const { asFragment } = render(<MessageButton disabled={false} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('render component with text', () => {
    render(<MessageButton disabled={false} />);
    expect(screen.getByText(/Отправить/)).toBeInTheDocument();
  });

  it('render multiply components', () => {
    render(
      <>
        <MessageButton disabled={false} />
        <MessageButton disabled={false} />
      </>
    );
    expect(screen.queryAllByRole('button').length).toBe(2);
  });

  it('button is disabled', () => {
    render(<MessageButton disabled />);
    expect(screen.getByText('Отправить')).toBeDisabled();
  });

  it('button have style message-button', () => {
    render(<MessageButton disabled={false} />);
    expect(screen.getByText('Отправить')).toHaveClass('chat-message-button');
  });

  it('button click with userEvent', async () => {
    const mockHandler = jest.fn();

    render(<MessageButton disabled={false} onClick={mockHandler} />);
    await userEvent.click(screen.getByText(/Отправить/));
    expect(mockHandler).toBeCalledTimes(1);
  });

  it('button async click', async () => {
    const mockHandler = jest.fn();
    render(
      <MessageButton
        disabled={false}
        onClick={() => setTimeout(mockHandler, 1000)}
      />
    );

    await userEvent.click(screen.getByText(/Отправить/));

    await waitFor(() => expect(mockHandler).toHaveBeenCalledTimes(1), {
      timeout: 1100,
    });
  });
});
