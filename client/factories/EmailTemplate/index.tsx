import { ReactElement, useContext } from "react";
import { Box, configStyleValidator, Email, EmailProps } from "react-html-email";
import { LanguageContext } from "../../contexts/LanguageContext";
import EmailBody from "./templates/sections/EmailBody";
import EmailFooter from "./templates/sections/EmailFooter";
import EmailHeader from "./templates/sections/EmailHeader";
import { theme } from "./templates/theme";

export default function EmailTemplate({
  url,
}: {
  url: string;
}): ReactElement<EmailProps> {
  const { text } = useContext(LanguageContext);
  const companyLink = "https://pedagogame.com";
  const title = "Pedago Game Results";

  const bodyHeaderText = "Hi,";
  const bodyContentComponent = () => {
    return (
      <>
        <p>
          {text.email.thanksForPlaying}{" "}<strong>Pedago</strong>.{" "}
          {text.email.click}
        </p>
      </>
    );
  };
  const bodyCalloutHref = companyLink + url;
  const buttonText = text.email.result;
  const copyrightLinkHref = companyLink;
  const copyrightLinkText = "Pedago Game";

  configStyleValidator({
    strict: false,
    warn: false,
  });

  return (
    <Email title={title} style={theme.email}>
      <Box align="center" style={theme.emailBox}>
        <EmailHeader styles={theme.emailHeader} />
        <EmailBody
          bodyHeaderText={bodyHeaderText}
          bodyContentComponent={bodyContentComponent}
          bodyCalloutHref={bodyCalloutHref}
          bodyCalloutText={buttonText}
          styles={theme.emailBody}
        />
        <EmailFooter
          copyrightLinkHref={copyrightLinkHref}
          copyrightLinkText={copyrightLinkText}
          styles={theme.emailFooter}
        />
      </Box>
    </Email>
  );
}
