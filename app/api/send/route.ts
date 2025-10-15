import { EmailTemplate } from "../../../components/email-tamplate";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { username, email, message } = await req.json(); // Destructure 'username' directly
    const { data, error } = await resend.emails.send({
      from: "Taqdimak <onboarding@resend.dev>",
      to: ["aymanfox2002.99@gmail.com"],
      subject: "Hello world",
      html: `<ul> 
        <li><strong>Name</strong>: ${username}</li>
        <li><strong>Email</strong>: ${email}</li>
        <li><strong>Subject</strong>: ${message}</li>
        </ul>
      `,
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
