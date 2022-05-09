import { A, Item } from "react-html-email";

const BodyCallout = (props: any) => (
  <Item align={props.styles.itemAlign} style={props.styles.item}>
    <A
      href={props.bodyCalloutHref}
      textDecoration={props.styles.a.textDecoration}
      style={props.styles.a}
    >
      {props.bodyCalloutText}
    </A>
  </Item>
);

export default BodyCallout;
