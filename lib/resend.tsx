"use server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async () => {
    await resend.emails.send({
        to: "ayman2002.dev@gmail.com",
        from: "Ayman <aymanfox2002.99@gmail.com>",
        subject: "We did it, Message send ✅",
        html: "<h1>This message from Taqdimak egncy</h1>"
    })
}