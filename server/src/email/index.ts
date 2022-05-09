import { SocketCallback } from "models";
import nodemailer from "nodemailer";
require("dotenv").config();

const emailResults = async (
  email: string,
  html: string,
  callback: (args: SocketCallback) => void
): Promise<Promise<void>> => {

  try {    
    let transporter = nodemailer.createTransport({
      host: process.env.EMAIL_SMTP || "smtp.transip.email",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL || "info@pedagogame.com",
        pass: process.env.EMAIL_PASSWORD || "bpt3hrh!zfg0KFD7eaf",
      },
    });
    
    let info = await transporter.sendMail({
      from: '"Pedago Game" <info@pedagogame.com>',
      to: email,
      subject: "Game Results",
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
