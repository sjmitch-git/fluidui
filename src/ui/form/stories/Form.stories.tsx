import React from "react";
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
