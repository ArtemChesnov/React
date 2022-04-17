import React from 'react';
import { MessageInput } from './MessageInput';

export default {
  title: 'Components/MessageInput',
  component: MessageInput,
};

const Template = (args) => <MessageInput {...args} />;

export const Primary = Template.bind({});
