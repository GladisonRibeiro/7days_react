export class ValidarRecaptcha {
  async execute(token: string) : Promise<boolean> {

    try {
      const body = { token };
      const { data } = await fetch('/api/recaptcha',
        {
          method: "post",
          body: JSON.stringify(body)
        }
      ).then(function(response) {
        return response.json();
      });
      return data.success;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
}