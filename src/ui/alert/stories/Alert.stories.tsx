import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Link from "next/link";
import { Alert } from "..";

import { FaExclamation } from "react-icons/fa6";

const defaultCode = `<Alert
  status="info"
  title="Alert Title"
  message="This is an important message for the user."
  layout="default"
/>`;

const meta: Meta = {
  title: "Feedback/Alert",
  component: Alert,
  decorators: [
    (Story) => (
      <div className="max-w-2xl mx-auto">
        <Story />
      </div>
    ),
  ],
  parameters: {
    docs: {
      description: {
        component: `
The \`Alert\` component is used to display important messages to the user. It supports various statuses and layouts, and can be made dismissable if needed. The message can be a simple string or HTML content to allow more complex formatting.

### Key Features:
- **Status Variants**: Displays alerts with different statuses such as \`'info'\`, \`'success'\`, \`'warning'\`, or \`'error'\`, controlling the color and icon based on the alert's purpose.
- **Customizable Title**: Optional \`title\` prop allows for a bold heading to summarize the alert's message. Can be omitted for a title-less alert.
- **Rich Message Content**: Supports both plain text and HTML for the \`message\` prop, enabling rich text formatting, including tags like \`<strong>\`, \`<a>\`, \`<p>\`, and \`<code>\` tags.
- **Layout Options**: Configurable \`layout\` with options like \`'default'\` (light background), \`'solid'\` (solid color background), or \`'outline'\` (border only, no background).
- **Dismissable**: Optional \`dismissable\` prop adds a close button to the alert, allowing users to dismiss it. Includes a callback via the \`onClick\` prop.
- **Badge**: A badge can be added next to the title to highlight the alert. Supports icons or text with customizable background and text colors.


### Import
\`\`\`tsx
import { Alert } from '@smitch/breeze'
\`\`\`

### Usage Example:

\`\`\`tsx
${defaultCode}
\`\`\`
`,
      },
    },
  },
  argTypes: {
    dismissable: {
      options: [false, true],
      control: { type: "radio" },
    },
    onClick: {
      table: {
        disable: true,
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

const handleClick = () => {
  return false;
};

export const Default: Story = {
  argTypes: {
    badge: {
      table: {
        disable: true,
      },
    },
    badgeColor: {
      table: {
        disable: true,
      },
    },
    badgeBackground: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    status: "info",
    title: "Information Alert",
    message: "This is an important message for the user.",
    layout: "default",
    rounded: "md",
    dismissable: false,
  },
};

export const RichMessageWithLinks: Story = {
  name: "Rich Message with Links",
  args: {
    status: "info",
    title: "Welcome",
    layout: "default",
  },
  argTypes: {
    ...Default.argTypes,
  },
  render: (args) => (
    <Alert
      {...args}
      message={
        <>
          Welcome back! Go to your{" "}
          <Link href="/dashboard" className="underline font-medium">
            dashboard
          </Link>{" "}
          or read the{" "}
          <Link href="/docs" className="underline font-medium">
            docs
          </Link>
          .
        </>
      }
    />
  ),
  parameters: {
    docs: {
      source: {
        code: `<Alert
  status="success"
  title="Welcome"
  message={
    <>
      Welcome back! Go to your{" "}
      <Link href="/dashboard" className="underline font-medium">
        dashboard
      </Link>{" "}
      or read the{" "}
      <Link href="/docs" className="underline font-medium">
        docs
      </Link>.
    </>
  }
/>`,
        language: "tsx",
      },
    },
  },
};

export const NoTitle: Story = {
  argTypes: {
    ...Default.argTypes,
    title: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    ...Default.args,
    title: null,
  },
};

export const Solid: Story = {
  argTypes: {
    ...Default.argTypes,
  },
  args: {
    ...Default.args,
    layout: "solid",
  },
};

export const Outline: Story = {
  argTypes: {
    ...Default.argTypes,
  },
  args: {
    ...Default.args,
    layout: "outline",
  },
};

export const Dismissable: Story = {
  argTypes: {
    ...Default.argTypes,
  },
  args: {
    ...Default.args,
    dismissable: true,
    onClick: handleClick,
  },
};

export const WithBadge: Story = {
  name: "With Badge",
  args: {
    ...Default.args,
    status: "warning",
    title: "Warning",
    message: "This alert has an icon badge.",
    layout: "outline",
    badge: <FaExclamation />,
    badgeBackground: "warning",
    badgeColor: "light",
  },
};
