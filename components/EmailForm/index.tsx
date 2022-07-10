import { useEffect, useState } from "react";
import styled from "styled-components";

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

const WrapperImage = styled.div`
  width: 55px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Input = styled.input`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: ${({theme}) => theme.colors.primary};
  border: none;
  height: 100%;
  padding: 8px;
  outline: none;
  
  ::placeholder,
  ::-webkit-input-placeholder {
    color: ${({theme}) => theme.colors.placeholder};
  }
  :-ms-input-placeholder {
     color: ${({theme}) => theme.colors.placeholder};
  }
`;

const Button = styled.button`
  width: 194px;
  height: 75px;
  display: flex;
  align-items: center;
  justify-content: center;

  background: ${({theme}) => theme.colors.secondary};
  box-shadow: 10px 10px 30px rgba(255, 203, 71, 0.3);

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #FFFFFF;
  border: none;

  &:disabled {
    opacity: 0.6;
  }
`;

const WrapperEmailForm = styled.div`
  min-width: 585px;
  height: 75px;
  background: #FFFFFF;
  box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.06), 0px 0px 15px rgba(0, 0, 0, 0.06);
  display: flex;
  align-items: center;

  & > ${Input} {
    flex: 1 1 0;
  }

  & > ${Button} {
    flex-shrink: 0;
  }
`;
