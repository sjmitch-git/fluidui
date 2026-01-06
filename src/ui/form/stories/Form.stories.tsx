import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Form, Fieldset } from "..";
import { TextInput, Autocomplete, SearchInput, Select, PasswordInput, Checkbox } from "../..";
import { Default as Password } from "../../passwordinput/stories/PasswordInput.stories";
import data from "../../../data/countries.json";

const meta: Meta<typeof Form> = {
  title: "Forms/Form",
  component: Form,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="max-w-md mx-auto p-4">
        <Story />
      </div>
    ),
  ],
  argTypes: {
    children: { table: { disable: true } },
    onFormSubmit: { table: { disable: true } },
    onCancel: { table: { disable: true } },

    // Color & Background Controls
    submitBackground: {
      control: "select",
      options: [
        "primary",
        "secondary",
        "dark",
        "light",
        "info",
        "success",
        "warning",
        "danger",
        "transparent",
      ],
    },
    submitColor: {
      control: "select",
      options: [
        "dark",
        "light",
        "info",
        "success",
        "warning",
        "danger",
        "primary",
        "secondary",
        "current",
      ],
    },
    cancelBackground: {
      control: "select",
      options: [
        "primary",
        "secondary",
        "dark",
        "light",
        "info",
        "success",
        "warning",
        "danger",
        "transparent",
      ],
    },
    cancelColor: {
      control: "select",
      options: [
        "dark",
        "light",
        "info",
        "success",
        "warning",
        "danger",
        "primary",
        "secondary",
        "current",
      ],
    },
    submitOutlineColor: {
      control: "select",
      options: [
        "dark",
        "light",
        "info",
        "success",
        "warning",
        "danger",
        "primary",
        "secondary",
        "current",
        "accent",
      ],
    },
    cancelOutlineColor: {
      control: "select",
      options: [
        "dark",
        "light",
        "info",
        "success",
        "warning",
        "danger",
        "primary",
        "secondary",
        "current",
        "accent",
      ],
    },

    // Boolean toggles
    submitOutline: { control: "boolean" },
    cancelOutline: { control: "boolean" },

    // Layout & Spacing
    layout: {
      control: "inline-radio",
      options: ["col", "row"],
    },
    actionsLayout: {
      control: "select",
      options: ["row", "row-reverse", "col", "col-reverse"],
    },
    actionsSpacing: {
      control: "inline-radio",
      options: ["0", "1", "2", "4", "8"],
    },

    // Button Style
    buttonSize: {
      control: "select",
      options: ["sm", "md", "lg", "xl"],
    },
    buttonTextcase: {
      control: "inline-radio",
      options: ["uppercase", "lowercase", "capitalize", "normal-case"],
    },
    buttonShape: {
      control: "inline-radio",
      options: ["default", "rounded", "pill"],
    },
    buttonIsBold: { control: "boolean" },

    // Other
    showCancel: { control: "boolean" },
    actions: { control: "boolean" },
    separator: { control: "boolean" },
  },
  args: {
    buttonShape: "default",
    buttonTextcase: "normal-case",
    submitColor: "light",
    className: "",
  },
  parameters: {
    docs: {
      description: {
        component: `
The **Form** component is a flexible, accessible form wrapper with built-in validation, action buttons, and layout support.

### Key Features:
- Native HTML5 validation with real-time submit button disabling
- Supports column and row layouts
- Customizable action buttons (submit/cancel)
- Full support for all form inputs (text, file, checkbox, etc.) via native \`FormData\`
- Clean, accessible markup

### Import:
\`\`\`tsx
import { Form } from '@smitch/breeze'
\`\`\`

### Usage:
Pass form elements as children and handle submission with \`onFormSubmit\`.
        `,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

const handleSubmit = (formData: FormData) => {
  const data = Object.fromEntries(formData.entries());
  console.log("Form submitted:", data);
};

const onFormCancel = () => {
  console.log("Form cancelled");
};

const contactContent = () => (
  <Fieldset legendText="Contact" legendSize="xl" spacing="8">
    <TextInput label="Name" autocomplete="name" layout="row" name="name" id="name" required />
    <TextInput
      label="e-Mail"
      autocomplete="email"
      layout="row"
      name="email"
      id="email"
      placeholder="myname@email.com"
      hint={true}
      title="Enter a valid e-Mail address"
      required
    />
    <TextInput
      label="Mobile"
      autocomplete="tel"
      layout="row"
      name="tel"
      id="tel"
      placeholder="07123456789"
      hint={true}
      title="Enter a valid UK mobile number"
      pattern="^(+44s?7d{3}|(?07d{3})?)s?d{3}s?d{3}$"
    />
  </Fieldset>
);

export const ContactForm: Story = {
  args: {
    name: "contact-form",
    children: contactContent(),
    actionsLayout: "row",
    actionsSpacing: "4",
    onCancel: onFormCancel,
    onFormSubmit: handleSubmit,
    showCancel: true,
    submitBackground: "primary",
    cancelBackground: "transparent",
    cancelColor: "current",
    separator: true,
  },
};

const options = ["All", "Books", "Home", "Sports", "Toys"];

const onSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
  console.log("Search Category", event.target.value);
};

const onButtonSubmit = (value: string) => {
  console.log("Search Query", value);
};

const searchOptions = () => (
  <Select
    options={options}
    onChange={onSelectChange}
    className="!border-0 focus:border-neutral focus:ring-0 focus:ring-transparent !bg-neutral !text-dark"
  />
);

const searchContent = () => (
  <SearchInput
    onButtonSubmit={onButtonSubmit}
    label="Search"
    icon={true}
    size="md"
    inputStyles="border-0 focus:ring-0 focus:ring-transparent"
    btnShape="square"
    btnBackground="primary"
    btnColor="light"
    autocomplete="on"
    placeholder="Search this site"
    autocorrect="on"
    spacing="0"
    rounded="none"
    className="flex-grow"
  />
);

const AddressContent = () => (
  <Fieldset legendText="Address" legendSize="xl">
    <TextInput
      label="Street"
      autocomplete="address-line1"
      layout="row"
      name="address-line1"
      id="address-line1"
      required
    />
    <TextInput
      label="Town/City"
      autocomplete="address-level2"
      layout="row"
      name="address-line2"
      id="address-line2"
      required
    />
    <TextInput
      label="County"
      autocomplete="address-level1"
      layout="row"
      name="address-line3"
      id="address-line3"
      required
    />
    <Autocomplete
      data={data}
      list="countries"
      placeholder="Select Country"
      autocomplete="country-name"
      label="Country"
      layout="row"
      required
    />
    <TextInput
      label="Post Code"
      autocomplete="postal-code"
      layout="row"
      name="postal-code"
      id="postal-code"
      inputStyles="max-w-[10em] border-neutral"
      required
    />
  </Fieldset>
);

export const AddressForm: Story = {
  args: {
    onFormSubmit: handleSubmit,
    children: AddressContent(),
    actionsLayout: "row",
    actionsSpacing: "4",
    buttonIsBold: true,
    buttonTextcase: "uppercase",
    name: "address-form",
  },
};

const NewsletterContent = () => (
  <Fieldset
    legendText="Sign-up for our newsletter?"
    legendSize="md"
    legendAlign="left"
    spacing="4"
    className="flex-col md:flex-row flex-grow"
  >
    <TextInput label="Name" autocomplete="name" layout="col" name="name" id="name" required />
    <TextInput
      label="e-Mail"
      autocomplete="email"
      layout="col"
      name="email"
      id="email"
      placeholder="myname@email.com"
      hint={false}
      title="Enter a valid e-Mail address"
      required
    />
  </Fieldset>
);

export const NewsletterForm: Story = {
  args: {
    onFormSubmit: handleSubmit,
    children: NewsletterContent(),
    layout: "row",
    actionsLayout: "row",
    actionsSpacing: "4",
    submitLabel: "Sign-up",
    submitColor: "light",
    buttonIsBold: true,
    name: "newsletter-form",
  },
};

const loginContent = () => (
  <Fieldset legendText="Log-in" legendSize="xl" spacing="8" isBold={true}>
    <TextInput
      label="User Name"
      autocomplete="username"
      name="username"
      id="username"
      placeholder="User Name or e-Mail"
      required
    />
    <PasswordInput {...Password.args} label="Password" />
    <p className="psw group-valid:hidden">
      Forgot <a href="#">password?</a>
    </p>
    <Checkbox label="Remember me" name="remember" className="group-invalid:hidden" />
  </Fieldset>
);

export const LoginForm: Story = {
  args: {
    children: loginContent(),
    actionsLayout: "row",
    actionsSpacing: "4",
    onCancel: onFormCancel,
    onFormSubmit: handleSubmit,
    showCancel: true,
    submitLabel: "Log-in",
    submitBackground: "primary",
    cancelBackground: "transparent",
    cancelColor: "current",
    separator: true,
    name: "login",
  },
};

export const SearchForm: Story = {
  args: {
    children: searchContent(),
    actions: false,
    className: "flex !flex-row !gap-0 border border-neutral focus-within:border-accent",
  },
};

export const SearchWithOptions: Story = {
  args: {
    ...SearchForm.args,
    children: (
      <>
        {searchOptions()}
        {searchContent()}
      </>
    ),
  },
};

const DynamicValidationContent = () => {
  const [showRequiredField, setShowRequiredField] = useState(false);

  return (
    <>
      <div className="mb-6 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
        <label className="flex items-center gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={showRequiredField}
            onChange={(e) => setShowRequiredField(e.target.checked)}
            className="w-5 h-5 rounded text-primary focus:ring-primary"
          />
          <span className="font-medium text-lg">Add required "Secret Code" field</span>
        </label>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-3">
          <strong>Watch the Submit button:</strong> It disables immediately when the required field
          appears and only enables when you fill it in. This shows how the Form component handles
          dynamic required fields with real-time native validation.
        </p>
      </div>

      <TextInput
        label="Name"
        name="name"
        id="name"
        autocomplete="name"
        placeholder="John Doe"
        required
      />

      <TextInput
        label="Email"
        name="email"
        id="email"
        type="email"
        autocomplete="email"
        placeholder="john@example.com"
        required
      />

      {showRequiredField && (
        <TextInput
          label="Secret Code"
          name="secretCode"
          id="secretCode"
          placeholder="Enter the secret code"
          hint
          title="This field is required when visible"
          required
        />
      )}
    </>
  );
};

export const DynamicValidation: Story = {
  args: {
    onFormSubmit: handleSubmit,
    children: <DynamicValidationContent />,
    submitLabel: "Submit Form",
    submitBackground: "primary",
    actionsLayout: "row",
    actionsSpacing: "4",
    separator: true,
    buttonIsBold: true,
  },
  parameters: {
    docs: {
      description: {
        story: `
This story showcases the **real-time native validation** feature of the Form component.

**What to try:**
1. The form starts valid (only Name and Email required)
2. Check the box → a new **required** "Secret Code" field appears
3. The **Submit button immediately disables**
4. Type anything in "Secret Code" → button enables again
5. Uncheck the box → field disappears → button enables

No manual state management or refs needed — the Form component automatically tracks validity as fields are added/removed.

Perfect for conditional forms like admin tools, multi-step wizards, or your announcement form's "Specific User" field.
        `,
      },
    },
  },
};
