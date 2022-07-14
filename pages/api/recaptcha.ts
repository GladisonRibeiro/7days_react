import fetch from 'node-fetch';

export default async function handler(request, response) {
  var requestBody = JSON.parse(request.body);
  const secret_key = process.env.RECAPTCHA_SECRET_KEY;
  const uri = `https://www.google.com/recaptcha/api/siteverify?secret=${secret_key}&response=${requestBody.token}`
  const data = await fetch(uri, { method: 'post' }).then(res => res.json());
  return response.status(200).json({ data });
}