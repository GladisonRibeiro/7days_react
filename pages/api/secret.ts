export default async function handler(request, response) {
  const data = {
    emailjs_token: process.env.EMAILJS_TOKEN,
    emailjs_welcome_template_id: process.env.EMAILJS_WELCOME_TEMPLATE_ID,
    emailjs_welcome_service_id: process.env.EMAILJS_WELCOME_SERVICE_ID,
  };
  return response.status(200).json({ data });
}
