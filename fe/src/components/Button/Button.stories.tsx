import type { Meta, StoryObj } from '@storybook/react';

import Button from '.';

const meta: Meta<typeof Button> = {
  title: 'common/Button',
  component: Button,
  argTypes: {
    onClick: { action: 'click' },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Rectangle: Story = {
  name: 'rectangle',
  args: {
    shape: 'rectangle',
    size: 's',
    children: 'button',
  },
  argTypes: {
    shape: { control: 'none' },
    size: ['s', 'm'],
  },
};

export const Circle: Story = {
  name: 'circle',
  args: {
    shape: 'circle',
  },
  argTypes: {
    shape: { control: 'none' },
    size: { control: 'none' },
  },
};
