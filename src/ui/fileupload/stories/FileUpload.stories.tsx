import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { FileUpload } from "..";
import { FileUploadProps } from "../types";

const meta: Meta<typeof FileUpload> = {
  title: "Inputs/File Upload",
  component: FileUpload,
  decorators: [
    (Story) => (
      <div className="max-w-sm p-2 mx-auto">
        <Story />
      </div>
    ),
  ],
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
The **FileUpload** component enables users to upload files through an input interface. It supports multiple file selections, file type restrictions, and custom labels for user clarity. This component is ideal for applications where users need to submit documents, images, or other types of files.

### Key Features:
- **Multiple File Support**: Upload multiple files at once if enabled.
- **File Type Filtering**: Restrict file uploads to certain types (e.g., images, documents).
- **Custom Labels**: Add descriptive labels for both the button and the multiple file upload prompt.

### Import:
\`\`\`jsx
import { FileUpload } from '@smitch/breeze';
\`\`\`

### Example Usage:
\`\`\`jsx
<FileUpload
    label="Upload"
    accept="image/*"
    showMultiple={true}
    multipleLabel="Multiple"
    icon={true}
    size="md"
    onChange={(e) => console.log('File(s) selected:', e.target.files)}
/>
\`\`\`
`,
      },
    },
  },
  argTypes: {
    label: {
      description: "Label displayed on the file upload button.",
      control: "text",
      defaultValue: "Upload",
    },
    showMultiple: {
      description: "Whether multiple files can be selected at once.",
      control: "boolean",
      defaultValue: false,
    },
    multipleLabel: {
      description: "Label displayed when multiple files are selected.",
      control: "text",
      defaultValue: "Multiple",
    },
    icon: {
      description:
        "Whether to show an icon in the upload button.",
      control: "boolean",
      defaultValue: true,
    },
    size: {
      description: "Size of the component.",
      control: "select",
      options: ["md", "lg", "xl"],
      defaultValue: "md",
    },
    onChange: {
      description: "Callback triggered when files are selected.",
      action: "file changed",
      table: {
        disable: true,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args: FileUploadProps) => {

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const newFiles = event.target.files ? Array.from(event.target.files) : [];
      console.log("Selected files:", newFiles[0]);
    };

    return (
      <FileUpload
        {...args}
        onChange={handleChange}
      />
    );
  },

  args: {
    label: "Upload",
    accept: "application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/vnd.ms-word.document.macroEnabled.12,application/rtf,text/plain,.pdf,.doc,.docx,.docm,.rtf,.txt",
    showMultiple: false,
    icon: true,
    size: "md"
  },

  argTypes: {
    onChange: {
      table: {
        disable: true,
      },
    },
  },
};
