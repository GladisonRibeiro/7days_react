import { Planta } from "../entity";

export class ObterListaProdutos {
  async execute() : Promise<Planta[]> {

    try {
      const headers = new Headers({
        "Content-Type": "application/json",
      });
      const { data } = await fetch('/api/plant', { method: "get", headers: headers}).then(function(response) {
        return response.json();
      });
      return data;
    } catch (error) {
      console.log(error);
    }
  }
}