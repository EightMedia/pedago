const EMAIL_BACKGROUND_COLOR = "#000";
const EMAIL_LOGO_WIDTH = 314 / 2;
const EMAIL_LOGO_HEIGHT = 88 / 2;
const BODY_BOX_BACKGROUND_COLOR = "#222";
const BODY_BOX_WIDTH = "600px";
const CALLOUT_BACKGROUND_COLOR = "#4202ff";
const BODY_CONTENT_COLOR = "#eee";
const BODY_CONTENT_LINK_COLOR = "#9f82ff";
const BODY_FOOTER_COLOR = "#999";
const BODY_CONTENT_FONT_SIZE = "18px";
const BORDER_RADIUS = "6";
const PADDING_M = "50";
const PADDING_S = "25";
const padding = (top = 0, right = 0, bottom = 0, left = 0) =>
  `${top}px ${right}px ${bottom}px ${left}px`;

const emailItemStyle = {
  backgroundColor: EMAIL_BACKGROUND_COLOR,
  padding: padding(PADDING_S, PADDING_S, PADDING_S, PADDING_S),
};

const bodyItemStyle = {
  backgroundColor: BODY_BOX_BACKGROUND_COLOR,
};

export const theme = {
  email: {
    backgroundColor: EMAIL_BACKGROUND_COLOR,
    padding: "25px",
    width: "100%",
  },
  emailHeader: {
    itemAlign: "center",
    item: {
      ...emailItemStyle,
    },
    logo: {
      width: EMAIL_LOGO_WIDTH,
      height: EMAIL_LOGO_HEIGHT,
      paddingRight: "10px",
    },
    a: {
      textDecoration: "none",
      color: BODY_CONTENT_COLOR,
    },
    emailHeaderText: {
      color: BODY_CONTENT_COLOR,
      fontSize: "16px",
    },
  },
  emailBody: {
    box: {
      align: "center",
      style: {
        width: BODY_BOX_WIDTH,
      },
    },
    bodyHeader: {
      item: {
        ...bodyItemStyle,
        ...{
          padding: padding(PADDING_M, PADDING_M, 0, PADDING_M),
          borderRadius: padding(BORDER_RADIUS, BORDER_RADIUS, 0, 0),
        },
      },
      span: {
        color: BODY_CONTENT_COLOR,
      },
    },
    bodyContent: {
      item: {
        ...bodyItemStyle,
        ...{
          padding: padding(0, PADDING_M, 0, PADDING_M),
        },
      },
      span: {
        fontSize: BODY_CONTENT_FONT_SIZE,
        color: BODY_CONTENT_COLOR,
      },
      a: {
        color: BODY_CONTENT_LINK_COLOR,
      },
    },
    bodyCallout: {
      item: {
        ...bodyItemStyle,
        ...{
          padding: padding(PADDING_S, PADDING_M, PADDING_S, PADDING_M),
        },
      },
      itemAlign: "center",
      a: {
        fontSize: "22px",
        textDecoration: "none",
        display: "inline-block",
        background: CALLOUT_BACKGROUND_COLOR,
        color: "white",
        padding: "20px 100px",
        borderRadius: padding(
          BORDER_RADIUS,
          BORDER_RADIUS,
          BORDER_RADIUS,
          BORDER_RADIUS
        ),
      },
    },
    bodyFooter: {
      item: {
        ...bodyItemStyle,
        ...{
          padding: padding(0, PADDING_M, PADDING_M, PADDING_M),
          borderRadius: padding(0, 0, BORDER_RADIUS, BORDER_RADIUS),
        },
      },
      span: {
        color: BODY_FOOTER_COLOR,
      },
      a: {
        color: BODY_CONTENT_LINK_COLOR,
      },
    },
  },
  emailFooter: {
    item: { ...emailItemStyle },
    itemAlign: "center",
    span: {
      color: BODY_FOOTER_COLOR,
    },
    a: {
      color: BODY_FOOTER_COLOR,
    },
  },
};
