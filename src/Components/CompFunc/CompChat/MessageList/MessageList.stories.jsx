import React from 'react';
import { MessageList } from './MessageList';

export default {
  title: 'Components/MessageList',
  component: MessageList,
};

const Template = (args) => <MessageList {...args} />;

export const TestMessage = Template.bind({});

TestMessage.args = {
  message: [
    {
      autor: 'Артём',
      value: 'Hi!',
      now: '10:10',
    },
    {
      autor: 'Душнила',
      value: 'Привет Артём, капец ты скучный...',
      now: '10:12',
    },
  ],
};
