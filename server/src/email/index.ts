import { SocketCallback } from "models";

const emailResults = (
  email: string,
  url: string,
  callback: (args: SocketCallback) => void
) => {
  const formData = require("form-data");
  const siteUrl = process.env.SITE_URL || "https://www.pedagogame.com";
  const mailSender = process.env.MAIL_SENDER || "'Pedago Game' <info@pedagogame.com>"
  const Mailgun = require("mailgun.js");
  const mailgun = new Mailgun(formData);
  const mg = mailgun.client({
    username: "api",
    key: "3f1578f837a3320c159996ceb26d3ac6-100b5c8d-90e327c3",
  });
  mg.messages
    .create("sandboxa0f798192c164e828cb0146819533cee.mailgun.org", {
      from: mailSender,
      to: [email],
      subject: "Game Result",
      template: "pedago",
      "h:X-Mailgun-Variables": JSON.stringify({
        url: url,
        logo: `${siteUrl}/images/logo.png`
      }),
    })
    .then((msg: any) => {
      callback({
        status: "OK",
        message: `E-mail sent to: ${email}. ${msg}`,
      });
    })
    .catch((err: any) => {
      callback({
        status: "ERROR",
        message: err,
      });
    });
};

export default emailResults;
