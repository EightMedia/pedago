import { A, Item, Span } from "react-html-email";

const BodyFooter = (props: any) => (
  <Item style={props.styles.item}>
    <Span color={props.styles.span.color}>
      <p>
        {props.bodyFooterText}
        <A style={props.styles.a} href={"#"}>{props.bodyFooterHref}</A>
      </p>
    </Span>
  </Item>
);

export default BodyFooter;
