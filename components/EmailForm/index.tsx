import { useEffect, useState } from "react";
import { Button, Input, WrapperEmailForm, WrapperImage } from "./styles";

interface EmailFormProps {
  message?: string;
  placeholder?: string;
  onSubmit: Function;
}

export default function EmailForm(props: EmailFormProps) {
  const [email, setEmail] = useState('');
  const [valid, setValid] = useState(false);

  useEffect(() => {
    const emailValidationByMozilla = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    const valid = emailValidationByMozilla.test(email);
    setValid(valid);
  }, [email]);

  const handlerChange = (event) => {
    const { value } = event.target;
    setEmail(value);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    props.onSubmit(email);
    setEmail('');
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
    </form>
  );
}

