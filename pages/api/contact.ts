import {NextApiRequest, NextApiResponse} from 'next';
import IEmail from "../../interfaces/IEmail";

require("dotenv").config();
const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { email, subject, message, name } = req.body

    const msg = {
        to: "contact@donihernandez.com",
        from: email,
        subject,
        name,
        text: message,
    };

    const createTransporter = async () => {
        const oauth2Client = new OAuth2(
            process.env.CLIENT_ID,
            process.env.CLIENT_SECRET,
            "https://developers.google.com/oauthplayground"
        );

        oauth2Client.setCredentials({
            refresh_token: process.env.REFRESH_TOKEN
        });

        const accessToken = await new Promise((resolve, reject) => {
            oauth2Client.getAccessToken((err: any, token: string) => {
                if (err) {
                    reject("Failed to create access token :(");
                }
                resolve(token);
            });
        });

        return nodemailer.createTransport({
            service: "gmail",
            auth: {
                type: "OAuth2",
                user: process.env.EMAIL,
                accessToken,
                clientId: process.env.CLIENT_ID,
                clientSecret: process.env.CLIENT_SECRET,
                refreshToken: process.env.REFRESH_TOKEN
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
        res.status(500).json({ error: 'Error sending email' });
    }
}

