import { Box } from "react-html-email";
import BodyCallout from "./BodyCallout";
import BodyContent from "./BodyContent";
import BodyFooter from "./BodyFooter";
import BodyHeader from "./BodyHeader";

const EmailBody = ({
  bodyHeaderText,
  bodyContentComponent,
  bodyCalloutHref,
  bodyCalloutText,
  bodyFooterText,
  bodyFooterHref,
  styles: { box, bodyHeader, bodyContent, bodyCallout, bodyFooter },
}: {
  bodyHeaderText: string;
  bodyContentComponent: any;
  bodyCalloutHref: string;
  bodyCalloutText: string;
  bodyFooterText: string;
  bodyFooterHref: string;
  styles: {
    box: any;
    bodyHeader: any;
    bodyContent: any;
    bodyCallout: any;
    bodyFooter: any;
  };
}) => (
  <Box align={box.align} style={box.style}>
    <BodyHeader bodyHeaderText={bodyHeaderText} styles={bodyHeader} />
    <BodyContent
      bodyContentComponent={bodyContentComponent}
      styles={bodyContent}
    />
    <BodyCallout
      bodyCalloutHref={bodyCalloutHref}
      bodyCalloutText={bodyCalloutText}
      styles={bodyCallout}
    />
    <BodyFooter
      bodyFooterText={bodyFooterText}
      bodyFooterHref={bodyFooterHref}
      styles={bodyFooter}
    />
  </Box>
);

export default EmailBody;
