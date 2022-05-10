import { SocketCallback } from "models";
import { createTransport } from "nodemailer";
require("dotenv").config();

const emailResults = async (
  email: string,
  html: string,
  callback: (args: SocketCallback) => void
): Promise<Promise<void>> => {
  try {
    let transporter = createTransport({
      host: process.env.EMAIL_SMTP,
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD,
      },
      dkim: {
        domainName: process.env.DOMAIN_NAME,
        keySelector: process.env.KEY_SELECTOR,
        privateKey: process.env.PRIVATE_KEY,
      },
    });

    let info = await transporter.sendMail({
      from: '"Pedago Game" <info@pedagogame.com>',
      to: email,
      subject: "Results",
      html,
    });

    console.log("Message sent: %s", info.messageId);

    callback({
      status: "OK",
      message: `E-mail sent to: ${email}`,
    });
  } catch (error) {
    callback({
      status: "ERROR",
      message: (error as string).toString(),
    });
  }
};

export default emailResults;
