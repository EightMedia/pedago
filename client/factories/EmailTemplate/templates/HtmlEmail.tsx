import { Email } from "react-html-email";
import EmailBody from "./sections/EmailBody";
import EmailFooter from "./sections/EmailFooter";
import EmailHeader from "./sections/EmailHeader";

const HtmlEmail = ({
  theme,
  title,
  emailHeaderHref,
  emailHeaderText,
  bodyHeaderText,
  bodyContentComponent,
  bodyCalloutHref,
  bodyCalloutText,
  bodyFooterText,
  bodyFooterHref,
  copyrightLinkHref,
  copyrightLinkText,
}: {
  theme: any;
  title: string;
  emailHeaderHref: string;
  emailHeaderText: string;
  bodyHeaderText: string;
  bodyContentComponent: any;
  bodyCalloutHref: string;
  bodyCalloutText: string;
  bodyFooterText: string;
  bodyFooterHref: string;
  copyrightLinkHref: string;
  copyrightLinkText: string;
}) => (
  <Email title={title} style={theme.email}>
    <EmailHeader
      title={title}
      emailHeaderHref={emailHeaderHref}
      emailHeaderText={emailHeaderText}
      styles={theme.emailHeader}
    />
    <EmailBody
      bodyHeaderText={bodyHeaderText}
      bodyContentComponent={bodyContentComponent}
      bodyCalloutHref={bodyCalloutHref}
      bodyCalloutText={bodyCalloutText}
      bodyFooterText={bodyFooterText}
      bodyFooterHref={bodyFooterHref}
      styles={theme.emailBody}
    />
    <EmailFooter
      copyrightLinkHref={copyrightLinkHref}
      copyrightLinkText={copyrightLinkText}
      styles={theme.emailFooter}
    />
  </Email>
);

export default HtmlEmail;
