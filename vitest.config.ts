import { coverageConfigDefaults, defineConfig } from "vitest/config";
import preserveDirectives from "rollup-plugin-preserve-directives";

export default defineConfig({
  plugins: [preserveDirectives()],
  test: {
    env: {
      NODE_ENV: "test",
    },

    coverage: {
      all: false,
      provider: "istanbul",
      exclude: [
        ...coverageConfigDefaults.exclude,
        "**/__mocks/**",
        "**/dist/**",
        "playwright.config.ts",
        "vitest-setup.ts",
        "vitest.helpers.ts",
        "**/*.stories.*",
      ],
    },
  },
});
