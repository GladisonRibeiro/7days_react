import fetch from 'node-fetch';

export default async function handler(request, response) {

  try {
   const res = await fetch('https://gist.githubusercontent.com/bugan/41d60ffa23fa0c4044cc138bf670780d/raw').then(res => res.json());
   const data = res as any;
   return response.status(200).json({ data });
  } catch (error) {
   console.log(error);
   return response.status(500).json({ error });
  }


}