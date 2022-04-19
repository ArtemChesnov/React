import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MessageForm } from './MessageForm';

export default {
  title: 'Components/MessageForm',
  component: MessageForm,
} as ComponentMeta<typeof MessageForm>;
const Template: ComponentStory<typeof MessageForm> = (args) => (
  <MessageForm {...args} />
);

export const Primary = Template.bind({});
