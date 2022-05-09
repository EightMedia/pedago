import { Item, Span } from "react-html-email";

const BodyContent = (props: any) => (
  <Item style={props.styles.item}>
    <Span fontSize={props.styles.span.fontSize} style={props.styles.span}>
      <props.bodyContentComponent />
    </Span>
  </Item>
);

export default BodyContent;
