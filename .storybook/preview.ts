import type { Preview } from "@storybook/nextjs-vite";
import { themes } from "storybook/theming";
import { withGlobals } from "./withGlobals";
import "../src/styles/index.css";

const preview: Preview = {
  globalTypes: {
    darkMode: {
      defaultValue: true,
    },
  },
  parameters: {
    docs: {
      theme: themes.dark,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      test: "todo",
    },
  },
  decorators: [withGlobals],
  tags: ["autodocs"],
};

export default preview;
