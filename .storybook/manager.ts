import { addons, types } from "storybook/manager-api";
import theme from "./theme";

import { ADDON_ID, TOOL_ID } from "./constants";
import { Tool } from "./Tool";

addons.setConfig({
  theme: theme,
});

addons.register(ADDON_ID, () => {
  addons.add(TOOL_ID, {
    type: types.TOOL,
    title: "Tailwind dark mode",
    match: ({ viewMode }: { viewMode?: string }) =>
      !!viewMode?.match(/^(story|docs)$/),
    render: Tool,
  });
});
