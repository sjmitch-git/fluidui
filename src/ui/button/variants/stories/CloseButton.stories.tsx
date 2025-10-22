import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { CloseButton } from "..";

const meta: Meta = {
  title: "Buttons/Close Button",
  component: CloseButton,
  args: {
    layout: "circle",
    size: "md",
    disabled: false,
    hoverScale: true,
  },
  argTypes: {
    layout: {
      options: ["square", "circle"],
      control: { type: "radio" },
    },
    disabled: {
      options: [false, true],
      control: { type: "radio" },
    },
    title: {
      table: {
        disable: true,
      },
    },
    onClick: {
      table: {
        disable: true,
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CloseButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

Default.decorators = [
  (Story) => (
    <div
      className="bg-neutral"
      style={{
        margin: "1rem",
        padding: "2rem",
        position: "relative",
      }}
    >
      <Story />
    </div>
  ),
];
