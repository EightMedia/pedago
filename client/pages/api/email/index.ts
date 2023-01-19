import { NextApiRequest, NextApiResponse } from "next/types";

const formData = require("form-data");
const Mailgun = require("mailgun.js");

const siteUrl = process.env.SITE_URL || "https://www.pedagogame.com";
const mailSender =
  process.env.MAIL_SENDER || "'Pedago Game' <info@pedagogame.com>";
const mailgun = new Mailgun(formData);
let mg;
const mailgunKey = process.env.NEXT_PUBLIC_MAILGUN_KEY;

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  try {
    mg = mailgun?.client({
      username: "api",
      key: mailgunKey,
      url: "https://api.eu.mailgun.net",
    });

    mg.messages
      .create(process.env.MAILGUN_DOMAIN || "pedagogame.com", {
        from: mailSender,
        to: [req.query.email],
        subject: "Game Result",
        template: "pedago",
        "h:X-Mailgun-Variables": JSON.stringify({
          url: req.body,
          logo: `${siteUrl}/images/logo.png`,
        }),
      })
      .then((response: any) => {
        console.log(response)
        res.status(200).send(response);
      });
  } catch (error) {
    console.log(error)
    res.status(500).send(error);
  }
};

export default handler;
