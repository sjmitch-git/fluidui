import React from "react";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Markdown } from "..";
import { MarkdownProps } from "../types";
import { solarizedlight, dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

const sampleMarkdown = `
# Welcome to Markdown

This is a **Markdown** component with syntax highlighting.

## Example Code

\`\`\`javascript
function greet(name) {
  return \`Hello, \${name}!\`;
}
console.log(greet('World'));
\`\`\`

- Uses Tailwind CSS typography for styling.
- Syntax highlighting with Prism themes.

Inline code: \`const x = 10;\`

### Features
- Customizable Prism themes.
- Responsive typography with Tailwind's \`prose\` classes.
- Easy integration with React applications.
`;

const codeExample = `
<Markdown
    content={markdown}
    className="md:prose-lg lg:prose-xl"
    showLineNumbers={true}
/>
`;

const codeExampleDracula = `
<Markdown
  content={markdown}
  prismStyle={dracula}
  showLineNumbers={true}
/>
`;

const meta: Meta<MarkdownProps> = {
  title: "Typography/Markdown",
  component: Markdown,
  parameters: {
    docs: {
      description: {
        component: `
The **Markdown** component renders Markdown content with syntax highlighting and Tailwind CSS typography styling.

### Key Features:
- Syntax highlighting for code blocks using \`react-syntax-highlighter\` with Prism themes.
- Styled with Tailwind CSS \`prose\` classes for beautiful typography.
- Customizable via props for content, Prism themes, and additional CSS classes.

### Dependencies:
- \`react-markdown\`: For parsing and rendering Markdown.
- \`react-syntax-highlighter\`: For syntax highlighting in code blocks.
- \`@tailwindcss/typography\`: For prose styling.

### Import:
\`\`\`jsx
import { Markdown } from '@smitch/fluid';
\`\`\`

### Example Usage (Default Prism Style):
\`\`\`jsx
${codeExample}
\`\`\`

### Example Usage (Dracula Prism Style):
\`\`\`jsx
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism'

${codeExampleDracula}
\`\`\`
        `,
      },
      source: {
        code: codeExample,
      },
    },
  },
  argTypes: {
    content: {
      description: "The Markdown content to render as a string.",
      control: { type: "text" },
    },
    prismStyle: {
      description: "The Prism theme object for syntax highlighting.",
      table: {
        disable: true,
      },
    },
    className: {
      description: "Additional CSS classes to apply to the Markdown container.",
      control: { type: "text" },
    },
    showLineNumbers: {
      description: "Toggles line numbers for code blocks.",
      control: { type: "boolean" },
    },
  },
  decorators: [
    (Story) => (
      <div className="dark:text-light bg-white dark:bg-transparent p-2">
        <Story />
      </div>
    ),
  ],
  tags: ["autodocs"],
} satisfies Meta<MarkdownProps>;

export default meta;

type Story = StoryObj<MarkdownProps>;

const MarkdownComponent = (args: MarkdownProps) => {
  return <Markdown {...args} />;
};

export const DefaultMarkdown: Story = {
  parameters: {
    docs: {
      source: {
        code: codeExample,
      },
    },
  },
  render: (args: MarkdownProps) => <MarkdownComponent {...args} />,
  args: {
    content: sampleMarkdown,
    prismStyle: solarizedlight,
    showLineNumbers: true,
  },
};

export const CustomPrismStyle: Story = {
  parameters: {
    docs: {
      source: {
        code: codeExampleDracula,
      },
    },
  },
  render: (args: MarkdownProps) => <MarkdownComponent {...args} />,
  args: {
    content: sampleMarkdown,
    prismStyle: dracula,
    showLineNumbers: true,
  },
};
