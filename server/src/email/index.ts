import { SocketCallback } from "models";
import nodemailer from "nodemailer";
require("dotenv").config();

const emailResults = async (
  email: string,
  url: string,
  callback: (args: SocketCallback) => void
): Promise<Promise<void>> => {

  try {
    let transporter = nodemailer.createTransport({
      host: process.env.EMAIL_SMTP,
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    let info = await transporter.sendMail({
      from: '"Pedago Game" <noreply@pedagogame.com>',
      to: email,
      subject: "Pedago Game Results",
      text: "What kind of teacher am I?",
      html: `<b>Bingo!</b> <a href="https://pedagogame.com${url}">Here are your result!</a>`,
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
