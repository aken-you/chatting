import type { Meta, StoryObj } from '@storybook/react';

import Input from '.';

const meta: Meta<typeof Input> = {
  title: 'common/Input',
  component: Input,
  argTypes: {
    onChange: { action: 'change' },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Primary: Story = {
  name: 'primary',
  args: {
    placeholder: '입력해주세요',
  },
};
