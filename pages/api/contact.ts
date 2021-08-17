import {NextApiRequest, NextApiResponse} from 'next';
import IEmail from "../../interfaces/IEmail";

require("dotenv").config();
const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { email, subject, message, name } = req.body

    const msg = {
        to: "donihernandez003@gmail.com",
        from: email,
        subject,
        name,
        text: message,
    };

    const createTransporter = async () => {
         return  nodemailer.createTransport({
             host: "smtp.mailtrap.io",
             port: 2525,
             auth: {
                 user: "93176587571394",
                 pass: "c54580b3c0ba21"
             }
         });
    };

    const sendEmail = async (emailOptions: IEmail) => {
        let emailTransporter = await createTransporter();
        await emailTransporter.sendMail(emailOptions);
    };

    try {
        await sendEmail(msg);
        res.json({ message: `Email has been sent` });
    } catch (error) {
        res.status(500).json({ error });
    }
}

