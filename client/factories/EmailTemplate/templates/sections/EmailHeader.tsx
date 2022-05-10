import { Image, Item } from "react-html-email";

const EmailHeader = ({ styles }: { styles: any }) => (
  <Item align={styles.itemAlign} valign={styles.vAlign} style={styles.item}>
    <Image height={120} width={400} src="https://pedagogame.com/images/logo.png" alt="Pedago Logo" />
  </Item>
);

export default EmailHeader;
