import { Span } from "react-html-email";
import BodyCallout from "./BodyCallout";
import BodyContent from "./BodyContent";
import BodyHeader from "./BodyHeader";

const EmailBody = ({
  bodyHeaderText,
  bodyContentComponent,
  bodyCalloutHref,
  bodyCalloutText,
  styles: { box, bodyHeader, bodyContent, bodyCallout },
}: {
  bodyHeaderText: string;
  bodyContentComponent: any;
  bodyCalloutHref: string;
  bodyCalloutText: string;
  styles: {
    box: any;
    bodyHeader: any;
    bodyContent: any;
    bodyCallout: any;
  };
}) => (
  <Span style={box.style}>
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
  </Span>
);

export default EmailBody;
