export class ObterSecrets {
  secrets: any;

  async execute() {
    if (!this.secrets) {
      const headers = new Headers({
        "Content-Type": "application/json",
      });
      const { data } = await fetch('/api/secret', { method: "get", headers: headers}).then(function(response) {
        return response.json();
      });
      this.secrets = data;
    }
    return this.secrets;
  }
}