import React, { useEffect } from "react";
import { useGlobals, useChannel } from "storybook/manager-api";
import { IconButton } from "storybook/internal/components";
import { MoonIcon, SunIcon } from "@storybook/icons";
import { TOOL_ID } from "./constants";

export const Tool: React.FC = () => {
  const [globals, updateGlobals] = useGlobals();
  const darkMode = globals.darkMode ?? false;

  const emit = useChannel({});

  useEffect(() => {
    emit("DARK_MODE", darkMode);
  }, [darkMode]);

  return (
    <IconButton
      key={TOOL_ID}
      active={darkMode}
      title={darkMode ? "Switch to light mode" : "Switch to dark mode"}
      onClick={() => updateGlobals({ darkMode: !darkMode })}
    >
      {!darkMode ? <SunIcon /> : <MoonIcon />}
    </IconButton>
  );
};
