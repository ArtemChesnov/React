import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { App } from './App';

export default {
  title: 'Components/AutorInput',
  component: App,
} as ComponentMeta<typeof App>;

const Template: ComponentStory<typeof App> = (args) => <App {...args} />;

export const Primary = Template.bind({});
