import type { Meta, StoryObj } from '@storybook/react';

import Icon from '.';

const meta: Meta<typeof Icon> = {
  title: 'common/Icon',
  component: Icon,
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const Primary: Story = {
  name: 'icon',
  args: {
    name: 'chatting',
    width: 32,
    height: 32,
    fill: 'red',
  },
};
