import { FillButton } from "./FillButton";

import type { Meta, StoryObj } from '@storybook/react';


const meta = {
    title: "common/FillButton",
    component: FillButton,
    tags: ['autodocs'],
    argTypes: {
    },
} satisfies Meta<typeof FillButton>;

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