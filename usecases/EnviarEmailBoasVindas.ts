import emailjs from '@emailjs/browser';
import { ObterSecrets } from './ObterSecrets';

export class EnviarEmailBoasVindas {
  async execute(email: string) {
    const [name] = email.split('@');

    try {
      const {
        emailjs_token,
        emailjs_welcome_template_id,
        emailjs_welcome_service_id
      } = await new ObterSecrets().execute();
      emailjs.init(emailjs_token);
    
      var templateParams = {
        name,
        to: email
      };      
      emailjs.send(emailjs_welcome_service_id, emailjs_welcome_template_id, templateParams)
        .then(function(response) {
          console.log('SUCCESS!', response.status, response.text);
          alert('Cadastro realizado com sucesso!');
        }, function(error) {
          console.log('FAILED...', error);
          throw error;
        });
    } catch (error) {
      alert('Ocorreu um erro, tente novamente!');
    }
  }
}