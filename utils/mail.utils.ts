import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
} as SMTPTransport.Options);

try {
  transporter.verify();
  console.log("Email transporter is ready");
} catch (error: any) {
  console.error("Error verifying email transporter:", error);
}

type SendEmailProps = {
  sender: Mail.Address;
  recipients: Mail.Address[];
  subject: string;
  message: string;
};

export const sendEmail = async ({
  sender,
  recipients,
  subject,
  message,
}: SendEmailProps) => {
  try {
    await transporter.sendMail({
      from: sender,
      to: recipients,
      subject,
      html: message,
      text: message,
    });
    return { success: true };
  } catch (error: any) {
    console.error(error);
    return { success: false, error: error.message };
  }
};
