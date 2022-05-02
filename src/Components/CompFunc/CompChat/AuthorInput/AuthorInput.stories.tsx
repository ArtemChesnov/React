import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AuthorInput } from './AuthorInput';

export default {
  title: 'Components/AutorInput',
  component: AuthorInput,
} as ComponentMeta<typeof AuthorInput>;

const Template: ComponentStory<typeof AuthorInput> = (args) => (
  <AuthorInput {...args} />
);

export const Primary = Template.bind({});
