import type { Meta, StoryObj } from "@storybook/react";

import { Avatar } from "..";

const meta: Meta<typeof Avatar> = {
  title: "Media/Avatar",
  component: Avatar,
  parameters: {
    docs: {
      description: {
        component: `
The \`Avatar\` component displays a user profile image with smart fallbacks:

- Custom \`src\` image (supports remote or data URLs)
- Gravatar fallback when \`email\` is provided
- Initials fallback from \`name\`
- Gradient background when no image is available

### Features
- Sizes: \`sm\`, \`md\`, \`lg\`, \`xl\`, \`xxl\`
- Layouts: \`circle\` (default), \`rounded\`, \`square\`
- Fully accessible with proper \`alt\` text
`,
      },
    },
  },
  argTypes: {
    size: {
      options: ["sm", "md", "lg", "xl", "xxl"],
      control: { type: "inline-radio" },
    },
    layout: {
      options: ["circle", "rounded", "square"],
      control: { type: "inline-radio" },
    },
    gravatarType: {
      options: ["identicon", "monsterid", "wavatar", "retro", "robohash"],
      control: { type: "select" },
    },
    src: { control: "text" },
    name: { control: "text" },
    email: { control: "text" },
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: "Joe Bloggs",
    email: "jbloggs@example.com",
    size: "xxl",
    layout: "circle",
    gravatarType: "identicon"
  },
};

export const WithCustomImage: Story = {
  args: {
    src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    alt: "Custom profile photo",
    size: "lg",
  },
};

export const InitialsOnly: Story = {
  args: {
    name: "John Doe",
    size: "xl",
  },
};

export const Gravatar: Story = {
  args: {
    email: "someone@gmail.com",
    size: "xxl",
    layout: "circle",
    gravatarType: "identicon",
  },
};

export const Small: Story = {
  args: {
    name: "SM",
    size: "sm",
  },
};

export const ExtraLarge: Story = {
  args: {
    name: "Big User",
    size: "xxl",
  },
};

export const RoundedLayout: Story = {
  args: {
    name: "Rounded Avatar",
    layout: "rounded",
    size: "lg",
  },
};

export const SquareLayout: Story = {
  args: {
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    layout: "square",
    size: "xl",
  },
};

export const NoData: Story = {
  name: "No Data (Person Icon)",
  args: {
    size: "lg",
    layout: "circle",
    name: undefined,
    email: undefined,
    src: undefined,
  },
};
