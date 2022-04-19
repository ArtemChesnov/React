import React from 'react';
import { MessageForm } from './MessageForm';

export default {
  title: 'Components/MessageForm',
  component: MessageForm,
};
const Template = (args) => <MessageForm {...args} />;

export const Primary = Template.bind({});
