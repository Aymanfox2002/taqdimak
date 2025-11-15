import { Resend } from "resend";

/**
 * Handles POST requests to send an email using Resend.
 *
 * Expects a JSON body containing:
 * - `username`: The sender's name
 * - `email`: The sender's email address
 * - `message`: The message content
 * ---
 *
 * @async
 * @param {Request} req - The incoming HTTP request containing form data.
 * @returns {Promise<Response>} Returns a JSON Response with the email result
 * or an error object with status 500.
 */
export async function POST(req: Request): Promise<Response> {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const { username, email, message } = await req.json();
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
