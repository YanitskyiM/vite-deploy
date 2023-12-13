import type { Meta, StoryObj } from '@storybook/react';
import '../index.css';

import { Input } from './Input.tsx';

const meta = {
    title: 'Example/Input',
    component: Input,
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const InputText: Story = {
    args: {
        type: 'text',
    },
};

export const InputPassword: Story = {
    args: {
        type: 'password',
    },
};