import { ReactElement } from "react";
import { EmailProps } from "react-html-email";
import HtmlEmail from "./templates/HtmlEmail";
import { theme } from "./templates/theme";

const mockDownloadLink = "https://getnebula.app/download";
const websiteLink = "https://getnebula.app";
const companyLink = "http://creativelifeform.com";
const title = "nebula";
const emailHeaderText =
  "Download the Nebula particle system designer for MacOS";

export default function EmailTemplate(url: string): ReactElement<EmailProps> {
  return (
    <HtmlEmail
      theme={theme}
      title={title}
      emailHeaderHref={url}
      emailHeaderText={emailHeaderText}
      bodyHeaderText={"Hi there 👋,"}
      bodyContentComponent={() => {
        const linkStyle = { color: theme.emailBody.bodyContent.a.color };
        return (
          <>
            <p>
              Thanks for signing up for the <b>Nebula</b> particle system
              designer alpha. Please download the app by clicking the download
              button below.
            </p>
            <p>
              As part of the alpha, wed really appreciate it if you could let us
              know your thoughts about the app in our{" "}
              <a href="https://spectrum.chat/nebula" style={linkStyle}>
                spectrum.chat
              </a>{" "}
              space.
            </p>
            <p>
              {" "}
              You can also submit any bugs or issues to our{" "}
              <a
                href="https://github.com/creativelifeform/nebula-issues/issues"
                style={linkStyle}
              >
                issue tracker
              </a>
              .
            </p>
          </>
        );
      }}
      bodyCalloutHref={mockDownloadLink}
      bodyCalloutText={"Download Nebula"}
      bodyFooterText={`If you're having trouble accessing the link, copy and paste the following link into your web browser `}
      bodyFooterHref={mockDownloadLink}
      copyrightLinkHref={companyLink}
      copyrightLinkText={"Creativelifeform"}
    />
  );
}
