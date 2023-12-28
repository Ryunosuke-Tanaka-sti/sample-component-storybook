import { OutlineButton } from "./OutlineButton";

import type { Meta, StoryObj } from '@storybook/react';


const meta = {
    title: "common/OutlineButton",
    component: OutlineButton,
    tags: ['autodocs'],
    argTypes: {
    },
} satisfies Meta<typeof OutlineButton>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Primary: Story = {
    args: {
        text: 'Button',
        size: 'xl',
        color: "blue"
    },
};


export const Secondary: Story = {
    args: {
        text: 'Click me',
        size: 'md',
        color: "red"
    },
};