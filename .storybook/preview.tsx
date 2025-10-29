import type { Preview } from "@storybook/nextjs-vite";
// import { themes } from "storybook/theming";
import { withThemeByClassName } from "@storybook/addon-themes";
// import { withGlobals } from "./withGlobals";
import "../src/styles/index.css";

const preview: Preview = {
  /* globalTypes: {
    darkMode: {
      defaultValue: true,
    },
  }, */
  parameters: {
    /*  docs: {
      theme: themes.dark,
    }, */
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
  decorators: [
    withThemeByClassName({
      themes: {
        light: "light",
        dark: "dark",
      },
      defaultTheme: "light",
    }),
    (Story) => {
      return (
        <div className="preview-decorator">
          <Story />
        </div>
      );
    },
  ],
  tags: ["autodocs"],
};

export default preview;
