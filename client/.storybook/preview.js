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
  TabletM: {
    name: "Tablet (768px)",
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
  MobileS: {
    name: "Mobile S (320px)",
    styles: {
      width: "320px",
      height: "100%",
    },
  },
  XLMin: {
    name: "XL min (1280px)",
    styles: {
      width: "1280px",
      height: "100%",
    },
  },
  LGMax: {
    name: "LG max (1279px)",
    styles: {
      width: "1279px",
      height: "100%",
    },
  },
  LGMin: {
    name: "LG min (1024px)",
    styles: {
      width: "1024px",
      height: "100%",
    },
  },
  MDMax: {
    name: "MD max (1023px)",
    styles: {
      width: "1023px",
      height: "100%",
    },
  },
  MDMin: {
    name: "MD min (768px)",
    styles: {
      width: "768px",
      height: "100%",
    },
  },
  SMMax: {
    name: "SM max (767px)",
    styles: {
      width: "767px",
      height: "100%",
    },
  },
  SMMin: {
    name: "SM min (550px)",
    styles: {
      width: "550px",
      height: "100%",
    },
  },
};

export const parameters = {
  viewport: {
    viewports: {
      ...customViewports,
    },
    defaultViewport: "Full",
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      order: ["Hello", "Views", "Components", "Layouts"],
    },
    panelPosition: "right",
  },
};
