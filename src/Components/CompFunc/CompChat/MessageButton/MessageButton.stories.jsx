import React from 'react';

import { MessageButton } from './MessageButton';

export default {
  title: 'Components/MessageButton',
  component: MessageButton,
  argTypes: {
    click: { action: 'click' },
  },
};

const Template = (args) => <MessageButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
