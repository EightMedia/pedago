import { A, Item, Span } from "react-html-email";
import { Logo } from "../../../../lib/components/Logo";

const EmailHeader = ({
  styles,
  title,
  emailHeaderHref,
  emailHeaderText,
}: {
  styles: any;
  title: string;
  emailHeaderHref: string;
  emailHeaderText: string;
}) => (
  <Item align={styles.itemAlign} style={styles.item}>
    <Span>
      <h1>
        <A
          href={emailHeaderHref}
          textDecoration={styles.a.textDecoration}
          style={styles.a}
        >
          <Logo />
          {title}
        </A>
      </h1>
    </Span>
    <Span>
      <h2 style={styles.emailHeaderText}>{emailHeaderText}</h2>
    </Span>
  </Item>
);

export default EmailHeader;
