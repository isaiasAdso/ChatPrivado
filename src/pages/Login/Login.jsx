import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { handleSubmit } from "./LoginHandler";
import { useNavigate } from "react-router-dom";
import AuthCookie from "../../Hooks/AuthCookie";
import logo from "../../assets/logo.png";
import {
  Container,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from "./Login.style";

export const Login = () => {
  const [submitButtonDisable, setSubmitButtonDisable] = useState(false);
  const [ValoresUsuario, setValoresUsuario] = useState({
    telefono: "",
    passwordHash: "",
  });

  const { telefono, passwordHash } = ValoresUsuario;
  const navigate = useNavigate();
  const { setValorCookie } = AuthCookie();

  const onSubmit = (event) => {
    handleSubmit(event, ValoresUsuario, navigate, setValorCookie);
  };

  return (
    <Container>
      <ToastContainer position="top-center" autoClose={1000} hideProgressBar />
      <Form onSubmit={onSubmit}>
        <div className="ContainerLogo">
          <img src={logo} alt="" className="Logotipo" />
        </div>
        <FormGroup>
          <Label htmlFor="telefono">Teléfono:</Label>
          <Input
            type="text"
            id="telefono"
            value={telefono}
            onChange={(e) =>
              setValoresUsuario({
                ...ValoresUsuario,
                telefono: e.target.value,
              })
            }
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Contraseña:</Label>
          <Input
            type="password"
            id="password"
            value={passwordHash}
            onChange={(e) =>
              setValoresUsuario({
                ...ValoresUsuario,
                passwordHash: e.target.value,
              })
            }
            required
          />
        </FormGroup>
        <Button type="submit" disabled={submitButtonDisable}>
          Iniciar Sesión
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
