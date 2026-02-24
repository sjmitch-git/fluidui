import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { SocialShare } from "..";

const meta: Meta<typeof SocialShare> = {
  title: "Social/SocialShare",
  component: SocialShare,
  tags: ["autodocs"],
  args: {
    text: "Check out this awesome site!",
    buttons: [
      "X",
      "Facebook",
      "LinkedIn",
      "Slack",
      "WhatsApp",
      "Reddit",
      "Pinterest",
      "Telegram",
      "Bluesky",
      "Email",
    ],
    btnShape: "circle",
    size: "lg",
    gap: "sm",
    layout: "vertical",
    grayscale: false,
    className: "",
    style: {},
  },
  parameters: {
    docs: {
      description: {
        component: [
          "The **SocialShare** component displays a row or column of social sharing buttons.",
          "You can control which buttons appear, their order, shape, and spacing.",
          "",
          "### Import:",
          "```jsx",
          "import { SocialShare } from '@smitch/breeze';",
          "```",
          "",
          "### Example Usage:",
          "",
          "#### Share Only Homepage",
          "To make all share buttons share only the homepage (site root), use the `shareHomeOnly` prop:",
          "",
          "```jsx",
          "<SocialShare",
          '  text="Check out this awesome site!"',
          "  buttons={['X', 'Facebook', 'LinkedIn']}\n  shareHomeOnly={true}",
          "/>",
          "```",
          "",
          "```jsx",
          "<SocialShare",
          '  text="Check out this awesome site!"',
          "  buttons={['X', 'Facebook', 'LinkedIn', 'Slack', 'WhatsApp']}\n  btnShape=\"circle\"\n  gap=\"md\"\n  layout=\"vertical\"",
          "/>",
          "```",
          "",
          "#### Buttons Options:",
          "- `'X'`",
          "- `'Facebook'`",
          "- `'LinkedIn'`",
          "- `'Slack'`",
          "- `'WhatsApp'`",
          "- `'Reddit'`",
          "- `'Pinterest'`",
          "- `'Telegram'`",
          "- `'Email'`",
          "- `'Bluesky'`",
        ].join("\n"),
      },
    },
  },
};
export default meta;
type Story = StoryObj<typeof SocialShare>;

export const Default: Story = {};

export const HomepageOnly: Story = {
  args: {
    text: "Check out this awesome site!",
    buttons: [
      "X",
      "Facebook",
      "LinkedIn",
      "Slack",
      "WhatsApp",
      "Reddit",
      "Pinterest",
      "Telegram",
      "Bluesky",
      "Email",
    ],
    btnShape: "circle",
    size: "lg",
    gap: "sm",
    layout: "vertical",
    grayscale: false,
    className: "",
    style: {},
    shareHomeOnly: true,
  },
  parameters: {
    docs: {
      description: {
        story: "All share buttons will share only the homepage URL.",
      },
    },
  },
};
