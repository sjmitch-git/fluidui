import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { FaPlay, FaPause, FaStop } from "react-icons/fa";
import { ButtonGroup } from "..";
import { Button } from "../..";

const meta: Meta = {
  title: "Buttons/Button Group",
  component: ButtonGroup,
  parameters: {
    docs: {
      description: {
        component: `
The **ButtonGroup** component is used to group multiple buttons together, either horizontally or vertically. It supports various layouts, outlines, and customizable styles to create cohesive button groups.

### Key Features:
- **Layouts**: Supports both horizontal and vertical layouts for button arrangement.
- **Customizable Styling**: Allows control over button group outlines, colors, and corner rounding.
- **Icon and Text Support**: Works well with buttons that contain either text, icons, or both.
- **Accessible Grouping**: Uses ARIA attributes for grouping buttons, improving accessibility.

### Import:
\`\`\`tsx
import { ButtonGroup } from '@/components/ButtonGroup';
\`\`\`

### Usage Example:
\`\`\`tsx
<ButtonGroup
  layout="horizontal"
  outline="thin"
  outlineColor="light"
>
  <Button>Left</Button>
  <Button>Middle</Button>
  <Button>Right</Button>
</ButtonGroup>
\`\`\`

 `,
      },
    },
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
    label: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    layout: "horizontal",
    rounded: true,
    outline: "none",
    outlineColor: "light",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ButtonGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Text",
  args: {
    children: (
      <>
        <Button disabled>Left</Button>
        <Button>Middle</Button>
        <Button>Right</Button>
      </>
    ),

    gap: "none"
  },
};

export const Icons: Story = {
  args: {
    children: (
      <>
        <Button btnBackground="dark" size="lg">
          <FaPlay />
        </Button>
        <Button btnBackground="dark" size="lg">
          <FaPause />
        </Button>
        <Button btnBackground="dark" size="lg">
          <FaStop />
        </Button>
      </>
    ),
  },
};

export const IconsWithText: Story = {
  args: {
    children: (
      <>
        <Button btnBackground="dark" size="md">
          <FaPlay /> Play
        </Button>
        <Button btnBackground="dark" size="md">
          <FaPause /> Pause
        </Button>
        <Button btnBackground="dark" size="md">
          <FaStop /> Stop
        </Button>
      </>
    ),
  },
};

export const Outlines: Story = {
  args: {
    outline: "thin",
    outlineColor: "light",
    children: (
      <>
        <Button btnBackground="dark" size="lg">
          <FaPlay /> Play
        </Button>
        <Button btnBackground="dark" size="lg">
          <FaPause /> Pause
        </Button>
        <Button btnBackground="dark" size="lg">
          <FaStop /> Stop
        </Button>
      </>
    ),
  },
};
