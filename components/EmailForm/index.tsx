import React, { useEffect, useState } from "react";
import ReCAPTCHA from 'react-google-recaptcha';
import { ObterSecrets } from "../../usecases/ObterSecrets";
import { ValidarRecaptcha } from "../../usecases/ValidarRecaptcha";

import { Button, Input, WrapperEmailForm, WrapperImage } from "./styles";

interface EmailFormProps {
  message?: string;
  placeholder?: string;
  onSubmit: Function;
}

const recaptchaRef = React.createRef<ReCAPTCHA>();

export default function EmailForm(props: EmailFormProps) {
  const [email, setEmail] = useState('');
  const [valid, setValid] = useState(false);
  const [recaptchaKey, setRecatchaKey] = useState(null);

  useEffect(() => {
    obterRecaptchaKey();
  },[])

  useEffect(() => {
    const emailValidationByMozilla = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    const valid = emailValidationByMozilla.test(email);
    setValid(valid);
  }, [email]);

  async function obterRecaptchaKey() {
    const {
      recaptcha_client_key
    } = await new ObterSecrets().execute();
    setRecatchaKey(recaptcha_client_key);
  }

  const handlerChange = (event) => {
    const { value } = event.target;
    setEmail(value);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (recaptchaRef.current) {
        const token = await recaptchaRef.current.executeAsync();
        if (!token) {
          throw new Error('Não foi possível prosseguir com a solicitação!')
        }
        const tokenIsValid = await new ValidarRecaptcha().execute(token);
        if (!tokenIsValid) {
          throw new Error('Você não é um usuário válido para este site!');
        }
      }
      props.onSubmit(email);
      setEmail('');
    } catch (error) {
      alert(error.message);
    }
  }



  return (
    <form onSubmit={handleSubmit}>
      <WrapperEmailForm >
        <WrapperImage>
          <img src="/imgs/mail.svg" alt="mail icon"></img>
        </WrapperImage>
        <Input
          id="email"
          name="email"
          value={email}
          onChange={handlerChange}
          placeholder={props.placeholder}
        />
        <Button type="submit" disabled={!valid}>
          {props.message ?? ''}
        </Button>
      </WrapperEmailForm>
      {recaptchaKey && <ReCAPTCHA
        ref={recaptchaRef}
        sitekey={recaptchaKey}
        size="invisible"
      />}
    </form>
  );
}

