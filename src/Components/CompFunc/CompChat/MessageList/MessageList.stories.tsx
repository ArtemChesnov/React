import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MessageList } from './MessageList';

export default {
  title: 'Components/MessageList',
  component: MessageList,
} as ComponentMeta<typeof MessageList>;

const Template: ComponentStory<typeof MessageList> = (args) => (
  <MessageList {...args} />
);

export const TestMessage = Template.bind({});

TestMessage.args = {
  messages: [
    {
      id: '1',
      author: 'Артём',
      value: 'Hi!',
      now: '10:10',
    },
    {
      id: '2',
      author: 'Душнила',
      value: 'Привет Артём, капец ты скучный...',
      now: '10:12',
    },
  ],
};
