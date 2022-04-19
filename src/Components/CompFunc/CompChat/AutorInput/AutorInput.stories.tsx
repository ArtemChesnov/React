import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AutorInput } from './AutorInput';

export default {
  title: 'Components/AutorInput',
  component: AutorInput,
} as ComponentMeta<typeof AutorInput>;

const Template: ComponentStory<typeof AutorInput> = (args) => (
  <AutorInput {...args} />
);

export const Primary = Template.bind({});
