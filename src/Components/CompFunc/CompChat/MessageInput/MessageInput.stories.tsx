import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MessageInput } from './MessageInput';

export default {
  title: 'Components/MessageInput',
  component: MessageInput,
} as ComponentMeta<typeof MessageInput>;

const Template: ComponentStory<typeof MessageInput> = (args) => (
  <MessageInput {...args} />
);

export const Primary = Template.bind({});
