import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MessageForm } from './MessageForm';
import { Provider } from 'react-redux';
import { store } from '../../../store';

export default {
  title: 'Components/MessageForm',
  component: MessageForm,
} as ComponentMeta<typeof MessageForm>;
const Template: ComponentStory<typeof MessageForm> = (args) => (
  <Provider store={store}>
    <MessageForm {...args} />
  </Provider>
);

export const Primary = Template.bind({});
