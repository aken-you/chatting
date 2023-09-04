import type { Meta, StoryObj } from '@storybook/react';

import { ICON_NAME } from '@constants/index';

import Icon from '@components/Icon';

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
    children: <Icon name={ICON_NAME.CHEVRON_DOWN} fill="white" />,
  },
  argTypes: {
    shape: { control: 'none' },
    size: { control: 'none' },
  },
};
