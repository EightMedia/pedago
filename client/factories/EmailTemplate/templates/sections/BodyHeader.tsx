import { Item, Span } from "react-html-email";

const BodyHeader = (props: any) => (
  <Item style={props.styles.item}>
    <Span style={props.styles.span}>
      <h2>{props.bodyHeaderText}</h2>
    </Span>
  </Item>
);

export default BodyHeader;
