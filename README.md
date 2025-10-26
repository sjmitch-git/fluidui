# Fluid UI

A Next.js/React UI component library.

- [Fluid UI](#fluid-ui)
  - [Overview](#overview)
  - [Features](#features)
  - [Getting Started](#getting-started)
    - [1. Install Next.js and React](#1-install-nextjs-and-react)
    - [2. Configure Tailwind 3](#2-configure-tailwind-3)
      - [1. Install Tailwind CSS Forms Plugin](#1-install-tailwind-css-forms-plugin)
      - [2. Configure `tailwind.config.js`](#2-configure-tailwindconfigjs)
  - [Installation](#installation)
  - [Compatibility](#compatibility)
  - [Peer dependencies](#peer-dependencies)
  - [Basic Usage](#basic-usage)
  - [Components](#components)
    - [Buttons](#buttons)
    - [Inputs](#inputs)
    - [Forms](#forms)
    - [Menus](#menus)
    - [Feedback](#feedback)
    - [Media](#media)
    - [Typography](#typography)
    - [Data Visualization](#data-visualization)
    - [Time](#time)
    - [Maps](#maps)
    - [Social Media](#social-media)
  - [Author](#author)

## Overview

Fluid UI is a comprehensive library of reusable UI components for Next.js/React applications. This
library is designed to streamline the development process and ensure consistency across your
projects.

## Features

- Reusable UI components
- Built with React
- Easy to integrate
- Supports TypeScript

## Getting Started

To use Fluid UI in your Next.js/React project, follow these steps:

### 1. Install Next.js and React

If you haven't set up your Next.js project yet, start by initializing it:

```bash
npx create-next-app@latest
```

When prompted:

- **Use TypeScript?**: Select **Yes** to enable TypeScript in your project.
- **Use Tailwind CSS?**: Select **Yes** to install and configure Tailwind CSS automatically.

Next.js will then generate the necessary configuration for both **TypeScript** and **Tailwind CSS**,
including `tsconfig.json`, `tailwind.config.js`, and PostCSS setup.

### 2. Configure Tailwind 3

To ensure that **Fluid UI** works correctly, you need to configure **Tailwind CSS** and install the
**Tailwind Forms** plugin. Follow the steps below:

Note: All current Fluid releases are built against Tailwind CSS v3. When Fluid reaches a v5 major
release we plan to migrate to Tailwind CSS v4 — migration notes and upgrade guidance will be
provided at that time. (To be done)

#### 1. Install Tailwind CSS Forms Plugin

You need to install the Tailwind CSS forms plugin for proper form styling:

```bash
npm install @tailwindcss/forms
```

#### 2. Configure `tailwind.config.js`

Update your `tailwind.config.js` file to match the configuration below:

```js
import type { Config } from "tailwindcss";
/* Import colors if using Tailwind's color palette */
import colors from "tailwindcss/colors";

const config: Config = {
  /* The selector strategy replaced the class strategy in Tailwind CSS v3.4.1.*/
  darkMode: "selector",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    /* Add this line: */
    "./node_modules/@smitch/fluid/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        /* Modify color values as desired to suit your theme */
        primary: {
          DEFAULT: colors.indigo[600],
          light: colors.indigo[300],
          dark: colors.indigo[900],
        },
        secondary: {
          DEFAULT: colors.gray[600],
          light: colors.gray[300],
          dark: colors.gray[900],
        },
        accent: {
          DEFAULT: colors.orange[500],
          light: colors.orange[300],
          dark: colors.orange[700],
        },
        neutral: colors.gray[400],
        dark: colors.gray[900],
        light: colors.gray[100],
        info: {
          DEFAULT: colors.sky[400],
          light: colors.sky[200],
          dark: colors.sky[600],
        },
        success: {
          DEFAULT: colors.green[600],
          light: colors.green[400],
          dark: colors.green[800],
        },
        warning: {
          DEFAULT: colors.amber[500],
          light: colors.amber[300],
          dark: colors.amber[700],
        },
        error: {
          DEFAULT: colors.red[600],
          light: colors.red[400],
          dark: colors.red[800],
        },
        danger: {
          DEFAULT: colors.red[600],
          light: colors.red[400],
          dark: colors.red[800],
        },
        current: "currentColor",
        transparent: "transparent",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: "class",
    }),
    require("@tailwindcss/typography"),
  ],
};
export default config;
```

## Installation

```bash
npm install @smitch/fluid
```

## Compatibility

Fluid UI releases are split by major versions to match React/Next compatibility. Choose the
installation command that fits your project:

```bash
npm install @smitch/fluid
```

```bash
npm install @smitch/fluid@^3
```

## Peer dependencies

Fluid is a component library and expects the host app to provide framework/runtime dependencies.
Below are the packages you should have installed in your project when using `@smitch/fluid`.

Required (framework)

```bash
npm install react react-dom next
```

Optional (feature-specific — install only if you use the feature)

Charts (optional)

If you use the chart components, install the Chart.js runtime and the React wrapper:

```bash
npm install chart.js react-chartjs-2
```

Maps (optional — Leaflet)

If you use the map components, install Leaflet and React Leaflet:

```bash
npm install leaflet react-leaflet
```

TypeScript notes:

- For some setups you may want `@types/leaflet` (install if your build complains about Leaflet
  types):

```bash
npm install -D @types/leaflet
```

Runtime guidance:

- As with charts, Leaflet/react-leaflet are optional peers. We lazy-load map code so apps that don't
  use maps aren't forced to install these packages.

Notes

- `react`, `react-dom`, and `next` are listed as peer dependencies; your app should provide them.
- Chart and Leaflet packages are optional peers — install them only if using the associated
  components. If you prefer convenience over control, you can add those packages to
  `optionalDependencies` in the published `dist/package.json` so npm will try to install them
  automatically for consumers.
- Commit your lockfile (package-lock.json / yarn.lock) so installs are deterministic in CI.

Notes:

- Commit your lockfile (package-lock.json / yarn.lock) for deterministic installs in CI. Even when
  using a range like `^4`, the lockfile pins the exact version installed.
- Use `npm ci` in CI to ensure installs are deterministic and reproduce the lockfile exactly.

## Basic Usage

Now, you can import and use any Fluid UI [component](#components) in your Next.js project:

```jsx
import { Button } from "@smitch/fluid";

const App = () => <Button>Click me</Button>;

export default App;
```

## Components

### Buttons

- <a href='https://fluid-ui.vercel.app/?path=/docs/fluid-ui-buttons-button--docs'>Button</a>
- <a href='https://fluid-ui.vercel.app/?path=/docs/fluid-ui-buttons-button-close-button--docs'>Close
  Button</a>
- <a href='https://fluid-ui.vercel.app/?path=/docs/fluid-ui-buttons-button-group--docs'>Button
  Group</a>

### Inputs

- <a href='https://fluid-ui.vercel.app/?path=/docs/fluid-ui-inputs-autocomplete--docs'>
  	Autocomplete
  </a>
- <a href='https://fluid-ui.vercel.app/?path=/docs/fluid-ui-inputs-checkbox--docs'>Checkbox</a>
- <a href='https://fluid-ui.vercel.app/?path=/docs/fluid-ui-inputs-counter--docs'>Counter</a>
- <a href='https://fluid-ui.vercel.app/?path=/docs/fluid-ui-inputs-file-upload--docs'>File
  Upload</a>
- <a href='https://fluid-ui.vercel.app/?path=/docs/fluid-ui-inputs-input--docs'>Input</a>
- <a href='https://fluid-ui.vercel.app/?path=/docs/fluid-ui-inputs-password-input--docs'>Password
  Input</a>
- <a href='https://fluid-ui.vercel.app/?path=/docs/fluid-ui-inputs-radiog-roup--docs'>Radio
  Group</a>
- <a href='https://fluid-ui.vercel.app/?path=/docs/fluid-ui-inputs-range-input--docs'>Range
  Input</a>
- <a href='https://fluid-ui.vercel.app/?path=/docs/fluid-ui-inputs-search-input--docs'>Search
  Input</a>
- <a href='https://fluid-ui.vercel.app/?path=/docs/fluid-ui-inputs-select--docs'>Select</a>
- <a href='https://fluid-ui.vercel.app/?path=/docs/fluid-ui-inputs-switch--docs'>Switch</a>
- <a href='https://fluid-ui.vercel.app/?path=/docs/fluid-ui-inputs-textarea--docs'>Textarea</a>
- <a href='https://fluid-ui.vercel.app/?path=/docs/fluid-ui-inputs-text-input--docs'>Text Input</a>

### Forms

- <a href='https://fluid-ui.vercel.app/?path=/docs/fluid-ui-forms-fieldset--docs'>Fieldset</a>
- <a href='https://fluid-ui.vercel.app/?path=/docs/fluid-ui-forms-form--docs'>Form</a>
- <a href='https://fluid-ui.vercel.app/?path=/docs/fluid-ui-forms-label--docs'>Label</a>

### Menus

- <a href='https://fluid-ui.vercel.app/?path=/docs/fluid-ui-menus-accordion--docs'>Accordion</a>
- <a href='https://fluid-ui.vercel.app/?path=/docs/fluid-ui-menus-breadcrumbs--docs'>Breadcrumbs</a>
- <a href='https://fluid-ui.vercel.app/?path=/docs/fluid-ui-menus-carousel--docs'>Carousel</a>
- <a href='https://fluid-ui.vercel.app/?path=/docs/fluid-ui-menus-drawer--docs'>Drawer</a>
- <a href='https://fluid-ui.vercel.app/?path=/docs/fluid-ui-menus-dropdown--docs'>Dropdown</a>
- <a href='https://fluid-ui.vercel.app/?path=/docs/fluid-ui-menus-navbar--docs'>NavBar</a>
- <a href='https://fluid-ui.vercel.app/?path=/docs/fluid-ui-menus-pagination--docs'>Pagination</a>
- <a href='https://fluid-ui.vercel.app/?path=/docs/fluid-ui-menus-sidebar--docs'>Sidebar</a>
- <a href='https://fluid-ui.vercel.app/?path=/docs/fluid-ui-menus-tabs--docs'>Tabs</a>

### Feedback

- <a href='https://fluid-ui.vercel.app/?path=/docs/fluid-ui-feedback-alert--docs'>Alert</a>
- <a href='https://fluid-ui.vercel.app/?path=/docs/fluid-ui-feedback-badge--docs'>Badge</a>
- <a href='https://fluid-ui.vercel.app/?path=/docs/fluid-ui-feedback-dialog--docs'>Dialog</a>
- <a href='https://fluid-ui.vercel.app/?path=/docs/fluid-ui-feedback-loading--docs'>Loading</a>
- <a href='https://fluid-ui.vercel.app/?path=/docs/fluid-ui-feedback-progress--docs'>Progress</a>
- <a href='https://fluid-ui.vercel.app/?path=/docs/fluid-ui-feedback-ratings--docs'>Ratings</a>
- <a href='https://fluid-ui.vercel.app/?path=/docs/fluid-ui-feedback-ticker--docs'>Ticker</a>
- <a href='https://fluid-ui.vercel.app/?path=/docs/fluid-ui-feedback-toast--docs'>Toast</a>

### Media

- <a href='https://fluid-ui.vercel.app/?path=/docs/fluid-ui-media-card--docs'>Card</a>
- <a href='https://fluid-ui.vercel.app/?path=/docs/fluid-ui-media-figure--docs'>Figure</a>
- <a href='https://fluid-ui.vercel.app/?path=/docs/fluid-ui-media-gallery--docs'>Gallery</a>
- <a href='https://fluid-ui.vercel.app/?path=/docs/fluid-ui-media-hero--docs'>Hero</a>
- <a href='https://fluid-ui.vercel.app/?path=/docs/fluid-ui-media-icon--docs'>Icon</a>
- <a href='https://fluid-ui.vercel.app/?path=/docs/fluid-ui-media-modal--docs'>Modal</a>
- <a href='https://fluid-ui.vercel.app/?path=/docs/fluid-ui-media-placeholder--docs'>PlaceHolder</a>
- <a href='https://fluid-ui.vercel.app/?path=/docs/fluid-ui-media-twitter-embed--docs'>Twitter
  Embed</a>
- <a href='https://fluid-ui.vercel.app/?path=/docs/fluid-ui-media-twitter-embed--docs#twitter-timeline'>Twitter
  Timeline</a>
- <a href='https://fluid-ui.vercel.app/?path=/docs/fluid-ui-media-video--docs'>Video</a>
- <a href='https://fluid-ui.vercel.app/?path=/docs/fluid-ui-media-video-player--docs'>Video
  Player</a>
- <a href='https://fluid-ui.vercel.app/?path=/docs/fluid-ui-media-youtube-embed--docs'>YouTube
  Embed</a>

### Typography

- <a href='https://fluid-ui.vercel.app/?path=/docs/fluid-ui-typography-blockquote--docs'>Blockquote</a>
- <a href='https://fluid-ui.vercel.app/?path=/docs/fluid-ui-typography-codeblock--docs'>Codeblock</a>
- <a href='https://fluid-ui.vercel.app/?path=/docs/fluid-ui-typography-heading--docs'>Heading</a>

### Data Visualization

- <a href='https://fluid-ui.vercel.app/?path=/docs/fluid-ui-data-visualization-data-table--docs'>Data
  Table</a>
- <a href='https://fluid-ui.vercel.app/?path=/docs/fluid-ui-data-visualization-pictogram--docs'>Pictogram</a>
- <a href='https://fluid-ui.vercel.app/?path=/docs/fluid-ui-data-visualization-line-chart--docs'>Line
  Chart</a>
- <a href='https://fluid-ui.vercel.app/?path=/docs/fluid-ui-data-visualization-bar-chart--docs'>Bar
  Chart</a>
- <a href='https://fluid-ui.vercel.app/?path=/docs/fluid-ui-data-visualization-mixed-chart--docs'>Mixed
  Chart</a>
- <a href='https://fluid-ui.vercel.app/?path=/docs/fluid-ui-data-visualization-pie-chart--docs'>Pie
  Chart</a>
- <a href='https://fluid-ui.vercel.app/?path=/docs/fluid-ui-data-visualization-doughnut-chart--docs'>Doughnut
  Chart</a>
- <a href='https://fluid-ui.vercel.app/?path=/docs/fluid-ui-data-visualization-radar-chart--docs'>Radar
  Chart</a>
- <a href='https://fluid-ui.vercel.app/?path=/docs/fluid-ui-data-visualization-polar-area-chart--docs'>PolarArea
  Chart</a>
- <a href='https://fluid-ui.vercel.app/?path=/docs/fluid-ui-data-visualization-scatter-chart--docs'>Scatter
  Chart</a>
- <a href='https://fluid-ui.vercel.app/?path=/docs/fluid-ui-data-visualization-stat-bar--docs'>Stat
  Bar</a>

### Time

- <a href='https://fluid-ui.vercel.app/?path=/docs/fluid-ui-time-clock--docs'>Clock</a>

### Maps

- <a href='https://fluid-ui.vercel.app/?path=/docs/fluid-ui-maps-map--docs'>Map</a>

### Social Media

- <a href='https://fluid-ui.vercel.app/?path=/docs/fluid-ui-social-socialshare--docs'>Social Media
  Share</a>

## Author

Fluid UI is developed and maintained by [Stephen Mitchell](mailto:sjmitch20@outlook.com).
