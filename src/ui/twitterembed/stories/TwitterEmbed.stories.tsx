import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import TwitterEmbed from "../TwitterEmbed";

const meta: Meta = {
  title: "Media/X Embed",
  component: TwitterEmbed,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
The **XEmbed** component allows users to embed a single post from X into their UI. It provides customization options such as language, theme (light or dark), and control over X's UI elements like headers, borders, transparency, and scrollbars.

### Key Features:
- Embed a single X post using the post ID and user handle.
- Customizable appearance with support for light and dark themes.
- Dynamic control over headers, borders, transparency, and scrollbars.
- Support for multiple languages in the embed.

### Import:
\`\`\`jsx
import { TwitterEmbed } from '@smitch/fluid';
\`\`\`

### Example Usage:
\`\`\`jsx
<TwitterEmbed
  handle="storybookjs"
  status="1767571829365883097"
  lang="en"
  theme="light"
  header
/>
\`\`\`
        `,
      },
    },
  },
} satisfies Meta<typeof TwitterEmbed>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Single Post",
  argTypes: {
    handle: {
      description: "X handle of the user whose post will be embedded.",
      control: { type: "text" },
    },
    status: {
      description: "The ID of the specific X post to embed (required).",
      control: { type: "text" },
    },
    lang: {
      description: "Language code for the embed (e.g., en, es).",
      control: { type: "text" },
    },
    theme: {
      description: 'Theme for the embed, either "light" or "dark".',
      control: { type: "radio" },
      options: ["light", "dark"],
    },
    header: {
      description: "Whether to display the X header in the embed.",
      control: { type: "boolean" },
    },
    borders: {
      description: "Whether to show borders around the embed.",
      control: { type: "boolean" },
    },
    transparent: {
      description: "Toggle transparency for the background.",
      control: { type: "boolean" },
    },
    scrollbars: {
      description: "Toggle scrollbars for the embed.",
      control: { type: "boolean" },
    },
  },
  args: {
    handle: "storybookjs",
    status: "1767571829365883097",
    lang: "en",
    theme: "light",
    header: true,
    borders: false,
    transparent: false,
    scrollbars: false,
  },
  parameters: {
    docs: {
      description: {
        story: "Displays a single post from the given X handle using the specified post ID.",
      },
    },
  },
};
