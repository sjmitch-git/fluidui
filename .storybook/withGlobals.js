import { useEffect, useGlobals } from "storybook/preview-api";

export const withGlobals = (StoryFn, context) => {
  const [globals] = useGlobals();
  const darkMode = globals.darkMode;
  const className = globals.className || "dark";

  const isInDocs = context.viewMode === "docs";

  useEffect(() => {
    const selector = isInDocs ? `#anchor--${context.id} .sb-story` : "#storybook-root";

    changeBackgroundMode(selector, { darkMode, isInDocs, className });
  }, [darkMode, isInDocs, context.id]);

  return StoryFn();
};

const changeBackgroundMode = (selector, { darkMode, className }) => {
  const rootElement = document.querySelector(selector);
  const rootParent = window.parent.document.getElementById("root");

  if (darkMode) {
    rootElement.classList.add(className);
    rootParent.classList.add(className);
  } else {
    rootElement.classList.remove(className);
    rootParent.classList.remove(className);
  }
};
