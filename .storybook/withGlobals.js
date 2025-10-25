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
  let rootParent = null;

  // Accessing window.parent.document can throw in some sandboxed/iframe
  // environments (Chromatic / capture runners). Guard it safely.
  try {
    rootParent =
      window.parent && window.parent.document
        ? window.parent.document.getElementById("root")
        : null;
  } catch (e) {
    rootParent = null;
  }

  if (darkMode) {
    if (rootElement) rootElement.classList.add(className);
    if (rootParent) rootParent.classList.add(className);
  } else {
    if (rootElement) rootElement.classList.remove(className);
    if (rootParent) rootParent.classList.remove(className);
  }
};
