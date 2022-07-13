export default async function handler(request, response) {
  const data = [
    {
       "name":"Ajuga Reptans",
       "preco":20,
       "img":"ajuga01_card",
       "ordem":0
    },
    {
       "name":"Cordyline fruticosa",
       "preco":35,
       "img":"fruticosa01_card",
       "ordem":3
    },
    {
       "name":"Crassula ovata",
       "preco":23.2,
       "img":"ovata01_card",
       "ordem":2
    }
  ];
  return response.status(200).json({ data });
}