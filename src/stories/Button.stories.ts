import type { Meta, StoryObj } from "@storybook/react";
import "../index.css";

import { Button } from "../Components/Basic/Button.tsx";

const meta = {
  title: "Example/Button",
  component: Button,
  argTypes: {
      theme:{control: "select",  options: ['primary', 'outline', 'link']},
      size:{control: "select",  options: ['sm','md', 'lg']},
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const ButtonPrimary: Story = {
  args: {
    theme: "primary",
    size: "md",
    children: "Submit",
  },
};

export const ButtonOutline: Story = {
  args: {
    theme: "outline",
    size: "md",
    children: "Story",
  },
};

export const ButtonLink: Story = {
  args: {
    theme: "link",
    size: "md",
    children: "Story",
  },
};
