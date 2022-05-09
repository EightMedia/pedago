import { A, Item, Span } from "react-html-email";

const EmailFooter = (props: any) => (
  <Item align={props.styles.itemAlign} style={props.styles.item}>
    <Span color={props.styles.span.color}>
      ©{" "}
      <A href={props.copyrightLinkHref} color={props.styles.a.color}>
        {props.copyrightLinkText}
      </A>{" "}
      {new Date().getFullYear()} all rights reserved.
    </Span>
  </Item>
);

export default EmailFooter;
