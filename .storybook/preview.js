import "../lib/styles/globals.css";

const customViewports = {
  Full: {
    name: "Full width (100%)",
    styles: {
      width: "100%",
      height: "100%",
    },
  },
  Desktop: {
    name: "Desktop (1440px)",
    styles: {
      width: "1440px",
      height: "100%",
    },
  },
  TabletL: {
    name: "Tablet L (1024px)",
    styles: {
      width: "1024px",
      height: "100%",
    },
  },
  TabletM: {
    name: "Tablet M (768px)",
    styles: {
      width: "768px",
      height: "100%",
    },
  },
  MobileL: {
    name: "Mobile L (414px)",
    styles: {
      width: "414px",
      height: "100%",
    },
  },
  MobileM: {
    name: "Mobile M (375px)",
    styles: {
      width: "375px",
      height: "100%",
      overflow: "auto",
    },
  },
  MobileS: {
    name: "Mobile S (320px)",
    styles: {
      width: "320px",
      height: "100%",
    },
  },
};

export const parameters = {
  backgrounds: {
    default: "light",
    values: [
      {
        name: "light",
        value: "#ffffff",
      },
      {
        name: "dark",
        value: "#12008A",
      },
    ],
  },
  viewport: {
    viewports: {
      ...customViewports,
    },
    defaultViewport: "MobileM",
  },
  actions: { argTypesRegex: "^(on|handle)[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      order: [
        "Hello",
        "Views",
        [
          "Introduction",
          "Landing Page",
          "Admin",
          ["Wizard", "Lobby", "Game", "Result"],
          "Game",
          [
            "Wizard",
            "Lobby",
            "PlayerMatch",
            "Game",
            "Waiting",
            "Discuss",
            "Result",
          ],
        ],
        "Components",
        "Layouts",
      ],
    },
    panelPosition: "right",
  },
};
