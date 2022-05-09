import { Button } from "../lib/components/Button";

const emailTemplate = (url: string) => {
  return (
    <>
      <a href={url}>
        <Button>GET</Button>
      </a>
    </>
  );
};

export default emailTemplate;
