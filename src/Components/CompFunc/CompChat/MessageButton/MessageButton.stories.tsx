import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MessageButton } from './MessageButton';

export default {
  title: 'Components/MessageButton',
  component: MessageButton,
  argTypes: {
    onClick: { action: 'click' },
  },
} as ComponentMeta<typeof MessageButton>;

const Template: ComponentStory<typeof MessageButton> = (args) => (
  <MessageButton {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
