import { useContext } from "react";
import ReactMarkdown from "react-markdown";
import { LanguageContext } from "../../contexts/LanguageContext";
import { Panel } from "../Panel";
import { Text } from "../Text";
import { Title } from "../Title";

const PrivacyStatement = ({ handleClose }: { handleClose: () => void }) => {
  const { text } = useContext(LanguageContext);

  return (
    <div onClick={handleClose}>
      <Panel width="mdlg">
        <Title size="lg" element="h1" tone="dark">
          Privacy
        </Title>
        <Text align="left" size="sm" tone="light" height="high">
          {text.privacy.responsibility}
        </Text>
        <br />
        <Title align="left" size="sm" element="h3" tone="dark">
          {text.privacy.persoonsGegevensCaption}
        </Title>
        <Text align="left" size="sm" tone="light" height="high">
          {text.privacy.persoonsGegevensText}
        </Text>
        <br />
        <Title align="left" size="sm" element="h3" tone="dark">
          {text.privacy.periodCaption}
        </Title>
        <Text align="left" size="sm" tone="light" height="high">
          {text.privacy.periodText}
        </Text>
        <br />
        <Title align="left" size="sm" element="h3" tone="dark">
          {text.privacy.cookiesCaption}
        </Title>
        <Text align="left" size="sm" tone="light" height="high">
          {text.privacy.cookiesText1}
        </Text>
        <br />
        <Text align="left" size="sm" tone="light" height="high">
          {text.privacy.cookiesText2}
        </Text>
        <br />
        <Title align="left" size="sm" element="h3" tone="dark">
          {text.privacy.modifyPersonalDataCaption}
        </Title>
        <Text align="left" size="sm" tone="light" height="high">
          <ReactMarkdown>{text.privacy.modifyPersonalDataText}</ReactMarkdown>
        </Text>
        <br />
      </Panel>
    </div>
  );
};

export default PrivacyStatement;
